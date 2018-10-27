import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {Clcryptocurrency} from '../class/clcryptocurrency';
import { DialogSimulationComponent } from '../dialog-simulation/dialog-simulation.component';
import { DialogInfoCryptoComponent } from '../dialog-info-crypto/dialog-info-crypto.component';

import { CurrencyService } from '../../services/currency/currency.http.service.service';

import {Http, Headers, RequestOptions, Response } from '@angular/http';

import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-moneysimulator',
  templateUrl: './moneysimulatorV2.component.html',
  styleUrls: ['./moneysimulatorV2.component.css'],
  providers: [CurrencyService]
})
export class MoneysimulatorComponentV2 implements OnInit {

  minDate = new Date(2000, 0, 1);
  maxDate = new Date();
  ChoosenStartDate = new Date();
  ChoosenEndDate = new Date();
  actCurrency = 'USD';
  Amount = 100;
  ActCrypto: Clcryptocurrency;
  private http: Http;

  displayedColumns = ['Symbol', 'CoinName'];
  dataSource;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  MyCrypto = new Array<Clcryptocurrency>();
  FavCryptoId = new Array<number>();
  FavCryptoItem = new Array<number>();
  SelectedCurrencyID: Number = 749869;

  dataLoad = false;

  FavFirstRowLength: number;
  FavFirstRow = new Array<number>();
  FavSecondRowLength: number;
  FavSecondRow = new Array<number>();

  OtherFirstRowLength: number = 8;
  OtherFirstRow = new Array<number>();
  OtherSecondRowLength: number = 8;
  OtherSecondRow = new Array<number>();

  fiatCurrency = [
    {id: 0, value: 'USD', viewValue: '$'},
    {id: 1, value: 'EUR', viewValue: '€'},
    {id: 2, value: 'GBP', viewValue: '£'}
  ];

  constructor(public dialog: MatDialog, private currencyService: CurrencyService) {}

  async ngOnInit() {
    this.MyCrypto = await this.currencyService.getAllgetAllCryptoCurrenciesParsed();
    //console.log(this.MyCrypto);
    this.ActCrypto = this.getCyptoItem(this.SelectedCurrencyID);


    this.getRandomCrypto();

    this.dataLoad = true;
    //console.log(this.SelectedCurrencyID);
    //console.log(this.ActCrypto);
    this.dataSource = new MatTableDataSource(this.MyCrypto);
    console.log("C'est chargé?");
  }

  getRandomCrypto()
  {
    while(this.OtherFirstRow.length < this.OtherFirstRowLength)
    {
      let Temp = Math.floor(Math.random() * (this.MyCrypto.length - 0 + 1)) + 0;
      if(!this.isDisplayed(Temp))
      {
        this.OtherFirstRow.push(Temp)
      }
    }
    while(this.OtherSecondRow.length < this.OtherSecondRowLength)
    {
      let Temp = Math.floor(Math.random() * (this.MyCrypto.length - 0 + 1)) + 0;
      if(!this.isDisplayed(Temp))
      {
        this.OtherSecondRow.push(Temp)
      }
    }
  }

  isDisplayed(numberId): boolean
  {
    for(let i in this.FavFirstRow)
    {
      if(i == numberId)
      {
        return true;
      }
    }
    for(let i in this.FavSecondRow)
    {
      if(i == numberId)
      {
        return true;
      }
    }
    for(let i in this.OtherFirstRow)
    {
      if(i == numberId)
      {
        return true;
      }
    }
    for(let i in this.OtherSecondRow)
    {
      if(i == numberId)
      {
        return true;
      }
    }

    return false;
  }

  getCyptoItem(numberID) : Clcryptocurrency
  {
    for(let i = 0; i < this.MyCrypto.length; i++)
    {
      if(this.MyCrypto[i]._id == numberID)
      {
        return this.MyCrypto[i];
      }
    }
    return null;
  }

  getCyptoItemFromId(numberID) : number
  {
    for(let i = 0; i < this.MyCrypto.length; i++)
    {
      if(this.MyCrypto[i]._id == numberID)
      {
        return i;
      }
    }
    return null;
  }

  ClickPic(ID: number) {
    this.SelectedCurrencyID = ID;
    this.ActCrypto = this.MyCrypto.filter(Temp => Temp._id === ID)[0];
    var element = document.getElementById("Simulation");
    element.scrollIntoView();
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

    openInfo()
    {
      const dialogRef = this.dialog.open(DialogInfoCryptoComponent, {
        data: {  actCrypto: this.ActCrypto}
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
