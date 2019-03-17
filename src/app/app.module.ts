import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule  } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SelectDropDownModule } from 'ngx-select-dropdown'

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DialogSimulationComponent } from './dialog-simulation/dialog-simulation.component';
import { MoneysimulatorComponentV2 } from './moneysimulatorV2/moneysimulatorV2.component';
import { TopbarComponent } from './topbar/topbar.component';
import { InfoComponent } from './info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { FilterPipeModule } from 'ngx-filter-pipe';
import 'hammerjs';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { AboutBlockchainComponent } from './about-blockchain/about-blockchain.component';
import { AboutCryptoComponent } from './about-crypto/about-crypto.component';
import { DialogInfoCryptoComponent } from './dialog-info-crypto/dialog-info-crypto.component';
import { RealtimeTransactionComponent } from './realtime-transaction/realtime-transaction.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    DialogSimulationComponent,
    MoneysimulatorComponentV2,
    TopbarComponent,
    InfoComponent,
    FooterComponent,
    AboutBlockchainComponent,
    AboutCryptoComponent,
    DialogInfoCryptoComponent,
    RealtimeTransactionComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    CollapseModule.forRoot(),
    FilterPipeModule,
    SelectDropDownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogSimulationComponent, DialogInfoCryptoComponent]
})
export class AppModule { }

