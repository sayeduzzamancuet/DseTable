import {Component, OnDestroy, OnInit} from '@angular/core';
import {DsedataService} from "../services/dsedata.service";
import {FILTER, StockData} from "../models/StockItem";

@Component({
  selector: 'app-sharemarket',
  templateUrl: './sharemarket.component.html',
  styleUrls: ['./sharemarket.component.scss']
})
export class SharemarketComponent implements OnInit,OnDestroy {

  stockData:any;
  tableData:FILTER[]=new Array<FILTER>();
  constructor(private dataService:DsedataService) {
    this.stockData=dataService.getStockData();
  }

  ngOnInit(): void {
    this.stockData.subscribe((data: StockData)=>{
      this.tableData=data.FILTER;
    })
  }
  ngOnDestroy(){
    if(this.stockData!=undefined){
      this.stockData?.unsubscribe();
    }
  }
}
