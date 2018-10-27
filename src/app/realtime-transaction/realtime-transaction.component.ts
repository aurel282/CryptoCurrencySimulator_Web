import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { TradeStreamerService } from '../../services/streamer/trade-streamer.service';
import {MatTableDataSource} from '@angular/material';

import {ExchangeData} from '../class/exchange-data';
import {TradeSample} from '../class/trade-sample';
import {TradeSrc} from '../class/trade-src';

import * as io from 'socket.io-client';
import { AnonymousSubscription } from 'rxjs/Subscription';

import { CurrencyService } from '../../services/currency/currency.http.service.service';
import { Clcryptocurrency } from '../class/clcryptocurrency';

@Component({
  selector: 'app-realtime-transaction',
  templateUrl: './realtime-transaction.component.html',
  styleUrls: ['./realtime-transaction.component.css'],
  providers: [TradeStreamerService, CurrencyService]
})
export class RealtimeTransactionComponent implements OnInit, OnDestroy {

  private socket;

  private LowestPrice: number = 0;

  private UnthreatedData: Array<string>;
  private Exchange : Array<ExchangeData>;
  private Trade : Array<TradeSample>;
  private subscription;
  dataSource;
  displayedColumns = ['Display','Name', 'Price', 'Compare'];

  dataLoad = false;
  
  MyCrypto = new Array<Clcryptocurrency>();
  fsym :Clcryptocurrency;
  tsym = [
    {id: 3, value: 'BTC', viewValue: 'Ƀ'}];

  configfsym = {
    displayKey:"_fullName", //if objects array passed which key to be displayed defaults to description,
    search:true, //enables the search plugin to search in the list
    height: '400px'
    }

  configtsym = {
      displayKey:"viewValue", //if objects array passed which key to be displayed defaults to description,
      search:false //enables the search plugin to search in the list
      }
  
  dataSourceTrade;
  displayTradeColumns = ['Exchange', 'Price', 'Quantity', 'Total'];

  tsymList = [
    {id: 0, value: 'USD', viewValue: '$'},
    {id: 1, value: 'EUR', viewValue: '€'},
    {id: 2, value: 'GBP', viewValue: '£'},
    {id: 3, value: 'BTC', viewValue: 'Ƀ'},
    {id: 4, value: 'ETH', viewValue: 'Ξ'},
    {id: 5, value: 'LTC', viewValue: 'Ł'},
    {id: 6, value: 'GOLD', viewValue: 'Gold'}
  ];

  /*
  CCC.STATIC.CURRENCY.SYMBOL = {
    , 'DAO'  : 'Ð'
    , 'CNY'  : '¥'
    , 'JPY'  : '¥'
    , 'PLN'  : 'zł'
    , 'RUB'  : '₽'
    , 'INR'  : '₹'
    , 'BRL'  : 'R$'
  };
  */
  

  constructor(private RealtimeService: TradeStreamerService, private currencyService: CurrencyService) { 
    console.log("Here or Not?");  
   }

   diplayedChange(Exchange: string, Displayed: boolean)
   {
     console.log(Exchange);
     console.log(Displayed);
   };

   CompareString(string1:string, string2: string){
    if ( string1 < string2 ){
      return -1;
    }else if( string1 > string2){
        return 1;
    }else{
      return 0;	
    }
  };

  CompareInt(int1:number, int2: number){
    if ( int1 < int2 ){
      return -1;
    }else if( int1 > int2){
        return 1;
    }else{
      return 0;	
    }
  };

  updatePrice(Trade: TradeSample)
  {
    let i = 0;
    //console.log(Trade.exchangeName)
    while(Trade.exchangeName != this.Exchange[i].name && i < this.Exchange.length)
    {
      //console.log(i + " : " + this.Exchange[i].name)
      i++;
    }
    if (Trade.exchangeName == this.Exchange[i].name)
    {
      if(this.LowestPrice == 0 || this.LowestPrice > Trade.price)
      {
        this.LowestPrice = Trade.price;
      }
      else
      {
        if(Trade.timestamp > this.Exchange[i].timestamp)
        {
          this.Exchange[i].price = Trade.price;
          this.Exchange[i].delta = ((this.Exchange[i].price/this.LowestPrice) * 100) - 100; 
        }
      }
    }
  }

  async ngOnInit() {

    this.MyCrypto = await this.currencyService.getAllgetAllCryptoCurrenciesParsed();
    await this.StartSocket('BTC', 'SNC');
    console.log(this.Exchange);
    
    //console.log(this.dataSource);

    this.dataLoad = true;
  }

  ngOnDestroy() {
    console.log("OnDestroy");
    this.DeleteSocket();
  }

  async StartSocket( mFsym:string, mTsym:string){
    await this.RealtimeService.setCrypto(mFsym, mTsym)
    await this.RealtimeService.getSocketData();
    this.Exchange = await this.RealtimeService.getExchange();
    this.dataSource = new MatTableDataSource(this.Exchange);
    this.Exchange.sort((a,b) => this.CompareString( a._name, b._name));
    this.subscription = this.RealtimeService.getSubscription();
    this.socket = io(this.RealtimeService.getStreamURl());
    this.socket.emit('SubAdd', { subs: this.subscription });
    this.UnthreatedData = new Array<string>();
    this.socket.on('m', (data) => {
      this.threatDate(data);
    });
   }

  threatDate(data:any)
   {
      this.UnthreatedData.push(data); 
      console.log(data);
      this.pushTrade(data);
      this.dataSourceTrade = new MatTableDataSource(this.Trade)
   }

   pushTrade(currentData:string){
    let tradeField = currentData.split('~');
    if (tradeField[0] != "3")
    {
      let TradeSampleItem = new TradeSample(tradeField[0],tradeField[1],tradeField[4],tradeField[5],tradeField[6],tradeField[7],tradeField[8],tradeField[9]);
      this.updatePrice(TradeSampleItem);
      //console.log(TradeSampleItem);
      this.writeData(TradeSampleItem);
    }
   }

   writeData(mTrade: TradeSample)
   {
    if (this.Trade == undefined)
    {
      this.Trade = new Array<TradeSample>();
      this.Trade.push(mTrade);
    }
    else
    {
      this.Trade.push(mTrade);
    }
    this.Trade.sort((b,a) => this.CompareInt( a.timestamp, b.timestamp));
   }

  async getTrade()
  {
    this.Trade = await this.RealtimeService.getTrade();
    this.dataSourceTrade = new MatTableDataSource(this.Trade);
    console.log("Refresh");
    console.log(this.Trade);
  }

  UnSelectAllTrade()
  {
    let i = 0;
    for(i = 0; i < this.Exchange.length; i++)
    {
      this.Exchange[i].displayed = false;
    }
    this.dataSource = new MatTableDataSource(this.Exchange);
  }

  SelectAllTrade()
  {
    let i = 0;
    for(i = 0; i < this.Exchange.length; i++)
    {
      this.Exchange[i].displayed = true;
    }
    this.dataSource = new MatTableDataSource(this.Exchange);
  }

  DeleteSocket(){
    //this.socket = io(this.RealtimeService.getStreamURl());
    this.socket.emit('SubRemove', { subs: this.subscription });
    this.UnthreatedData = new Array<string>();
   }

   ClearTrades()
   {
    this.Trade = new Array<TradeSample>();
   }

   UpdateRealTimeDataSource(){
    this.DeleteSocket();
    this.ClearTrades();
    console.log(this.fsym);
    console.log(this.fsym[0].name);
    console.log(this.tsym[0].value);
    this.StartSocket(this.fsym[0].name, this.tsym[0].value);

    }

}
