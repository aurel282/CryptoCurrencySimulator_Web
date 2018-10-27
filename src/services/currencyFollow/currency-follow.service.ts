import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Headers, Http, URLSearchParams } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyFollowService {

  private URL : string;
  private streamUrl = "https://streamer.cryptocompare.com/";


  private fsym : string;
  private tsym : string;

  private socket;

  constructor(private _http: Http) { }

  StartSocket(){
    /* this.socket = io(this.RealtimeService.getStreamURl());
     this.socket.emit('SubAdd', { subs: this.subscription });
     this.UnthreatedData = new Array<string>();
     this.socket.on('m', (data) => {
       this.threatDate(data);
     }); */
    }
}
