import { Injectable, OnInit } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';

import {Clcryptocurrency} from '../../app/class/clcryptocurrency';

import 'rxjs/add/operator/toPromise';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';


@Injectable()
export class CurrencyService  implements OnInit {

  MainCrypto: Array<number>;

  Json: JSON;
 

  static FromDateToTimeStamp(mDate: Date): number {
    return Math.round(mDate.getTime() / 1000);
  }

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  constructor(private _http: Http) { 
    //console.log(this.getAllgetAllCryptoCurrenciesParsed());
  }

  async getAllCryptoCurrencies(): Promise<JSON> {
    const url = 'https://min-api.cryptocompare.com/data/all/coinlist';
    const Temp = await this._http.get(url).toPromise();
    return Temp.json();
  }

  async ngOnInit()
  {
   
  }

  async getAllgetAllCryptoCurrenciesParsed(): Promise<Array<Clcryptocurrency>> {
    let AllCrypto = new Array<Clcryptocurrency>();
    this.Json = await this.getAllCryptoCurrencies();
    let baseURL = this.Json['BaseLinkUrl'];
    console.log(this.Json);
    console.log(this.Json['Data']);

    for(let crypto in this.Json['Data'])
    {
      let ActCrypto = new Clcryptocurrency(this.Json['Data'][crypto]['Id'], this.Json['Data'][crypto]['Name'],
                            this.Json['Data'][crypto]['Symbol'], baseURL + this.Json['Data'][crypto]['ImageUrl'],
                            this.Json['Data'][crypto]['CoinName'], this.Json['Data'][crypto]['FullName'],
                            this.Json['Data'][crypto]['IsTrading'], this.Json['Data'][crypto]['Algorithm'],
                            this.Json['Data'][crypto]['ProofType'], this.Json['Data'][crypto]['FullyPremined'],
                            this.Json['Data'][crypto]['TotalCoinSupply'], this.Json['Data'][crypto]['SortOrder'])
      AllCrypto.push(ActCrypto);
    }
    return AllCrypto;
  }

  async getFavoriteCryptoId(): Promise<Array<number>> {
    let favoriteID = new Array<number>();
    //console.log(this.Json['DefaultWatchlist']['CoinIs']);
    return this.Json['DefaultWatchlist']['CoinIs'].split(",");
    
  }

  

  async getCurrencyValue(CryptoName: string, Currency: string, TimeStamp: number): Promise<number> {
    const AppName = 'CryptoSimulator';
    // tslint:disable-next-line:prefer-const
    let params: URLSearchParams = new URLSearchParams();
    params.append('fsym', CryptoName);
    params.append('tsyms', Currency);
    params.append('ts', TimeStamp.toString());
    params.append('extraParams', AppName);
    //console.log(params);
    const urlpricehistorical = 'https://min-api.cryptocompare.com/data/pricehistorical?';
    let Value;
    await this.GetCryptoObsHTTP(params, urlpricehistorical)
    .then(value => Value = value)
    .then(
      function() {
        //console.log(Value);
        //console.log(Value[CryptoName][Currency]);
        return Value[CryptoName][Currency];
      }
    )
    .catch(
      function(err) {
          console.log(err);
          return -1;
        }
    );
    return Value[CryptoName][Currency];
  }

  GetValueFromDataJson(data, CryptoName, Currency): number {
    return data[CryptoName][Currency];
  }

  async GetCryptoObsHTTP(params: URLSearchParams, URL: string): Promise<JSON> {
    const Temp = await this._http.get(URL, {params : params}).toPromise();
    return Temp.json();
  }
}
