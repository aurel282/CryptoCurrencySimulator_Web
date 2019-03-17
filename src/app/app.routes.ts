import { Routes } from '@angular/router';

import { MoneysimulatorComponentV2 } from './moneysimulatorV2/moneysimulatorV2.component';
import { InfoComponent } from './info/info.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutCryptoComponent } from './about-crypto/about-crypto.component';
import { AboutBlockchainComponent } from './about-blockchain/about-blockchain.component';
import { RealtimeTransactionComponent } from './realtime-transaction/realtime-transaction.component';

export const routes: Routes = [
  { path: '', component: MoneysimulatorComponentV2 },
  { path: '#', component: MoneysimulatorComponentV2 },
  { path: 'infos', component: InfoComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'blockchain', component: AboutBlockchainComponent },
  { path: 'cryptocurrency', component: AboutCryptoComponent },
  { path: 'realtime', component: RealtimeTransactionComponent }
];
