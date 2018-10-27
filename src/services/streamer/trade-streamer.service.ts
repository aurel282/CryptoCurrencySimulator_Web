import { Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import { Headers, Http, URLSearchParams } from '@angular/http';

import {ExchangeData} from '../../app/class/exchange-data';
import {TradeSample} from '../../app/class/trade-sample';
import {TradeSrc} from '../../app/class/trade-src';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TradeStreamerService{

  
  private URL : string;
  private streamUrl = "https://streamer.cryptocompare.com/";


  private fsym : string;
  private tsym : string;

  private subscription = new Array<string>();

  private SubscriptionType : number;
  private Exchange : Array<ExchangeData>;

  private Trade: Array<TradeSample>;

  private socket;

  constructor(private _http: Http) {
    console.log("StartService");
    
   }

   setCrypto(mTsym: string, mFsym: string)
   {
      this.tsym = mTsym;
      this.fsym = mFsym;
      this.URL = "https://min-api.cryptocompare.com/data/subs?fsym=" + mFsym + "&tsyms=" + mTsym;
      this.subscription = new Array<string>();
      this.Exchange = new Array<ExchangeData>();
      this.Trade = new Array<TradeSample>();
    }

   async getSocketData()
   {
    let Temp = await this._http.get(this.URL).toPromise();
    let myJson = Temp.json();
    console.log(this.URL);
    console.log(myJson);
    console.log(this.tsym);
    let currentSubs = myJson[this.tsym]['TRADES'];

    for(let sub in currentSubs)
    {
      let tempEx = new ExchangeData();
      tempEx.name = currentSubs[sub].split('~')[1];
      tempEx.price = 0;
      tempEx.delta = 0;
      this.Exchange.push(tempEx);
      this.subscription.push(currentSubs[sub]);
    }
   }


   getExchange(): Array<ExchangeData>
   {
     return this.Exchange;
   }

   getTrade(): Array<TradeSample>
   {
    if (this.Trade == undefined)
    {
      return new Array<TradeSample>();
    }
    else
    {
      //console.log(this.Trade);
      return this.Trade;
    }
   }

   getSubscription(): Array<string>
   {
    if (this.subscription == undefined)
    {
      return new Array<string>();
    }
    else
    {
      console.log(this.subscription);
      return this.subscription;
    }
   }

   getStreamURl(): string
   {
      return this.streamUrl;
   }

   getData = () => {
    return Observable.create((observer) => {
        this.socket.on('m', (data) => {
            observer.next(data);
        });
    });
  }

 InitSocket = () => {
  this.socket = io(this.getStreamURl());
  this.socket.emit('SubAdd', { subs: this.subscription });
 }

 DeleteSocket() {
  this.socket.emit('SubRemove', { subs: this.subscription });
 }



}
