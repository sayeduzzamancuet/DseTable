import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SharemarketComponent} from "./sharemarket/sharemarket.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {LowestComponent} from "./lowest/lowest.component";


const routes: Routes = [
  { path: 'market', component: SharemarketComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'lowest', component: LowestComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
