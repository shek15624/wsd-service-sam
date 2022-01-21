import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { CheckbalanceComponent } from './checkbalance/checkbalance.component';
import { EmicalComponent } from './emical/emical.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'emi-calculator',
    component:EmicalComponent
  },
  {
    path:'add-account',
    component:AddaccountComponent
  },
  {
    path:'check-balance',
    component:CheckbalanceComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
