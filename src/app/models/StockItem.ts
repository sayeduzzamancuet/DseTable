export interface FILTER {
  TRADING_CODE: string;
  LTP: string;
  HIGH: string;
  LOW: string;
  CLOSEP: string;
  YCP: string;
  TRADE: string;
  VALUE: string;
  VOLUME: string;
  CHANGE: any;
  CHANGE_PERCENT: number;
}

export interface StockData {
  FILTER: FILTER[];
}
