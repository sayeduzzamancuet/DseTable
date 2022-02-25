import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {StockData} from "../models/StockItem";
import {Observable, of} from "rxjs";
import {StockProfileDisplayModel} from "../models/StockProfileDisplayModel";

@Injectable({
  providedIn: 'root'
})
export class DsedataService {

  data:any;
    apiUrl:string='http://www.dsebd.org:80/DSEApps/filter.php?key=mkistat_total_volume';
   //apiUrl:string='https://demo123.free.beeceptor.com/';
   //apiUrl2:string='https://localhost:5001';
   apiUrl2:string='https://stanalytics2022.herokuapp.com';
  constructor(private httpClient:HttpClient) { }
  getStockData():Observable<StockData>{
     return this.httpClient.get<StockData>(this.apiUrl);
  }
  get52WeekLowestData():Observable<StockProfileDisplayModel[]>{
    return this.httpClient.get<StockProfileDisplayModel[]>(this.apiUrl2+"/api/Stock/GetStocksNearLowestPrice");
  }
}
