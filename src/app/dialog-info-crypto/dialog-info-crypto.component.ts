import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {Clcryptocurrency} from '../class/clcryptocurrency';

@Component({
  selector: 'app-dialog-info-crypto',
  templateUrl: './dialog-info-crypto.component.html',
  styleUrls: ['./dialog-info-crypto.component.css']
})
export class DialogInfoCryptoComponent implements OnInit {

actCrypto: Clcryptocurrency;

  constructor(     
    public dialogRef: MatDialogRef<DialogInfoCryptoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.actCrypto = data.actCrypto;
     }

  ngOnInit() {
  }

}
