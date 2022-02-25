import { Component, OnInit } from '@angular/core';
import {DsedataService} from "../services/dsedata.service";
import { StockProfileDisplayModel} from "../models/StockProfileDisplayModel";
import {DataStateChangeEvent, GridDataResult, GridItem, PageChangeEvent} from "@progress/kendo-angular-grid";
import {State, process, SortDescriptor, CompositeFilterDescriptor} from "@progress/kendo-data-query";
@Component({
  selector: 'app-lowest',
  templateUrl: './lowest.component.html',
  styleUrls: ['./lowest.component.css']
})
export class LowestComponent implements OnInit {

  gridView: GridDataResult;
  gridData: any;
  public state: State = {
    skip: 0,
    take: 10,
    sort:  [
      {
        field: "Id",
        dir: "asc",
      },
    ]
  };
  totalAvailableRow:number=0;

  stockProfileData:any;

  constructor(private dataService:DsedataService) {
    this.stockProfileData=dataService.get52WeekLowestData();

  }

  ngOnInit(): void {
    this.stockProfileData.subscribe((data: StockProfileDisplayModel[])=>{
      this.gridData=data;
      this.totalAvailableRow=data.length;
      this.gridView = {
        data: this.gridData,
        total: this.totalAvailableRow,
      };
    })
  }
}
