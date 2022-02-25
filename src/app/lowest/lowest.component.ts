import { Component, OnInit } from '@angular/core';
import {DsedataService} from "../services/dsedata.service";
import { StockProfileDisplayModel} from "../models/StockProfileDisplayModel";

@Component({
  selector: 'app-lowest',
  templateUrl: './lowest.component.html',
  styleUrls: ['./lowest.component.css']
})
export class LowestComponent implements OnInit {

  stockProfileData:any;
  tableData:any;
  constructor(private dataService:DsedataService) {
    this.stockProfileData=dataService.get52WeekLowestData();
  }

  ngOnInit(): void {
    this.stockProfileData.subscribe((data: StockProfileDisplayModel[])=>{
      this.tableData=data;
      console.log(this.tableData)
    })
  }
  ngOnDestroy(){
    if(this.stockProfileData!=undefined){
      this.stockProfileData?.unsubscribe();
    }
  }
}
