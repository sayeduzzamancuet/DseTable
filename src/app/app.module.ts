import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PricechartComponent } from './pricechart/pricechart.component';
import { SharemarketComponent } from './sharemarket/sharemarket.component';
import { HttpClientModule} from "@angular/common/http";
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { ProjectedpriceComponent } from './projectedprice/projectedprice.component';
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule, NbTabsetModule,
  NbThemeModule
} from "@nebular/theme";
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {FormlyPrimeNGModule} from "@ngx-formly/primeng";
import {FormlyModule} from "@ngx-formly/core";
import { CalculatorComponent } from './calculator/calculator.component';
import { LowestComponent } from './lowest/lowest.component';
registerAllModules();
@NgModule({
  declarations: [
    AppComponent,
    PricechartComponent,
    SharemarketComponent,
    ProjectedpriceComponent,
    CalculatorComponent,
    LowestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HotTableModule,
    //RouterModule.forRoot(routes, { useHash: true }),
    NbLayoutModule,
    NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbThemeModule.forRoot(),
    NbMenuModule.forRoot(),
    AppRoutingModule,
    NbCardModule,
    NbTabsetModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyPrimeNGModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
