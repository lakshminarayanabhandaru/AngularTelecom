import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobileRechargeAPIService } from './mobile-recharge-api.service';
import { HeaderComponent } from './header/header.component';
import { ShowHistoryComponent } from './show-history/show-history.component';
import { GridComponent } from './show-history/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    HeaderComponent,
    ShowHistoryComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MobileRechargeAPIService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
