import {FormlyField} from "@ngx-formly/core";

export class TradeLogModel {
  TRADING_CODE: string='';
  QTY:number=0;
  BUYPRICE:number=0;
  SELLPRICE:number=0;
  BUYDATE:Date=new Date();
  SELLDATE:Date=new Date();
}
