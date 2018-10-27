import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-dialog-simulation',
  templateUrl: './dialog-simulation.component.html',
  styleUrls: ['./dialog-simulation.component.css']
})
export class DialogSimulationComponent implements OnInit {

  StartDate: Date;
  EndDate: Date;

  constructor(
    public dialogRef: MatDialogRef<DialogSimulationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.StartDate = data.StartDate;
      this.EndDate = data.EndDate;
     }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
