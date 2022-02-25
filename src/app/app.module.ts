import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharemarketComponent } from './sharemarket/sharemarket.component';
import { HttpClientModule} from "@angular/common/http";
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
import {FormlyModule} from "@ngx-formly/core";
import { CalculatorComponent } from './calculator/calculator.component';
import { LowestComponent } from './lowest/lowest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {registerAllModules} from "handsontable/registry";
import { GridModule } from '@progress/kendo-angular-grid';



registerAllModules();
@NgModule({
  declarations: [
    AppComponent,
    SharemarketComponent,
    CalculatorComponent,
    LowestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    BrowserAnimationsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
