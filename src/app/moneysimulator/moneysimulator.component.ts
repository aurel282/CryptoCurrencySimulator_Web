import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {Clcryptocurrency} from '../class/clcryptocurrency';
import { DialogSimulationComponent } from '../dialog-simulation/dialog-simulation.component';

import { CurrencyService } from '../../services/currency/currency.http.service.service';


import {Http, Headers, RequestOptions, Response } from '@angular/http';


@Component({
  selector: 'app-moneysimulator',
  templateUrl: './moneysimulator.component.html',
  styleUrls: ['./moneysimulator.component.css'],
  providers: [CurrencyService]
})
export class MoneysimulatorComponent implements OnInit {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  ChoosenStartDate = new Date();
  ChoosenEndDate = new Date();
  actCurrency = 'USD';
  Amount = 100;
  ActCrypto: Clcryptocurrency;
  private http: Http;

  MyCrypto = new Array<Clcryptocurrency>();
  SelectedCurrencyID: Number = 0;

  fiatCurrency = [
    {id: 0, value: 'USD', viewValue: '$'},
    {id: 1, value: 'EUR', viewValue: '€'},
    {id: 2, value: 'GBP', viewValue: '£'}
  ];

  constructor(public dialog: MatDialog, private currencyService: CurrencyService) {
    this.TestInitCrypto();
    this.ActCrypto = this.MyCrypto.filter(Temp => Temp._id === this.SelectedCurrencyID)[0];
    console.log(currencyService.getAllCryptoCurrencies())
   }

  ngOnInit() {
  }

  TestInitCrypto() {
    this.MyCrypto.push(new Clcryptocurrency(0, 'Monero', 'XMR', '../../assets/pictures/xmr.png','','','','','','','',''));
    this.MyCrypto.push(new Clcryptocurrency(1, 'Bitcoin', 'BTC', '../../assets/pictures/btc.png','','','','','','','',''));
    this.MyCrypto.push(new Clcryptocurrency(2, 'Ethereum', 'ETH', '../../assets/pictures/eth.png','','','','','','','',''));
  }

  ClickPic(ID: number) {
    this.SelectedCurrencyID = ID;
    this.ActCrypto = this.MyCrypto.filter(Temp => Temp._id === ID)[0];
  }

  async CryptoSimulation() {
     //console.log(this.ChoosenStartDate);
     //console.log(this.ActCrypto._symbol);
     //console.log(this.actCurrency);
     //console.log(this.Amount);
     const myFiatCurrency = this.fiatCurrency.filter(Temp => Temp.value === this.actCurrency)[0];
     let EndValue;
     let EndAmount;
     let StartValue;
     let Difference;
     // tslint:disable-next-line:prefer-const
     let MypromiseStart = await this.currencyService.getCurrencyValue
     (this.ActCrypto._symbol, this.actCurrency, this.FromDateToTimeStamp(this.ChoosenStartDate)).then(
      value => MypromiseStart = value);

     // tslint:disable-next-line:prefer-const
     let MypromiseEnd = await this.currencyService.getCurrencyValue
        (this.ActCrypto._symbol, this.actCurrency, this.FromDateToTimeStamp(this.ChoosenEndDate)).then(
          value => MypromiseEnd = value);

     //console.log(MypromiseStart);
     //console.log(MypromiseEnd);
     StartValue = MypromiseStart;
     EndValue = MypromiseEnd;
     const CryptoAmount = this.Amount / StartValue;
     //console.log(CryptoAmount);
     EndAmount = EndValue * CryptoAmount;
     Difference = EndAmount - this.Amount;
     Difference = parseFloat(Difference).toFixed(2);
     EndAmount = parseFloat(EndAmount).toFixed(2);

     const dialogRef = this.dialog.open(DialogSimulationComponent, {
       data: {  StartDate: this.ChoosenStartDate, EndDate: this.ChoosenEndDate, Currency : myFiatCurrency
       , CryptoCurreny : this.ActCrypto, StartValue : StartValue, EndValue : EndValue, Difference: Difference,
       Symbol: this.fiatCurrency, Amount: this.Amount, EndAmount: EndAmount}
     });
     dialogRef.afterClosed().subscribe(result => {
       //console.log('The dialog was closed');
       result = true;
     });
    }

    FromDateToTimeStamp(mDate: Date): number {
      return Math.round(mDate.getTime() / 1000);
    }

    CheckVar() {}
}
