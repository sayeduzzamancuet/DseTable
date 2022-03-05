import { Component, OnInit } from '@angular/core';
import {AverageModel} from "../models/calculator/AverageModel";
import {FormControl, FormGroup} from "@angular/forms";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
 public portfolioItems:AverageModel[]=new Array<AverageModel>();

  averageBuy:number;
  qty:number;
  constructor() { }
  averageForm:FormGroup;
  ngOnInit(): void {
    this.averageForm=new FormGroup({
      Code: new FormControl('ASIAINS'),
      Qty: new FormControl(0),
      Price: new FormControl(0),
      Action:new FormControl('BUY')
    });
  }

  Update() {
    this.portfolioItems.push(this.averageForm.value as AverageModel)
    this.recalculateSummary();
  }


  recalculateSummary(){
    let buyPrice:number=this.portfolioItems?.filter(x=>x.Action=='BUY').reduce((sumPrice,current)=>sumPrice+(current.Price*current.Qty),0)
    let buyCount:number=this.portfolioItems?.filter(x=>x.Action=='BUY').reduce((sumQty,current)=>sumQty+current.Qty,0)



    let sellPrice:number=this.portfolioItems?.filter(x=>x.Action=='SELL').reduce((sumPrice,current)=>sumPrice+(current.Price*current.Qty),0)
    let sellCount:number=this.portfolioItems?.filter(x=>x.Action=='SELL').reduce((sumQty,current)=>sumQty+current.Qty,0)

    this.averageBuy=(buyPrice-sellPrice)/(buyCount-sellCount);
    this.qty=buyCount-sellCount;
  }
}
