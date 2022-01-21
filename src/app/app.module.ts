import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';
import { ServiceComponent } from './service/service.component';
import { AshaComponent } from './asha/asha.component';
import { PunithComponent } from './punith/punith.component';
import { EmicalComponent } from './emical/emical.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubPipe } from './cub.pipe';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckbalanceComponent } from './checkbalance/checkbalance.component';
import { AddaccountComponent } from './addaccount/addaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    S1Component,
    S2Component,
    ServiceComponent,
    AshaComponent,
    PunithComponent,
    EmicalComponent,
    PipedemoComponent,
    SqrPipe,
    CubPipe,
    LifecyclehooksComponent,
    PaymentComponent,
    CheckbalanceComponent,
    AddaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
