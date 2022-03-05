// import { Injectable } from '@angular/core';
// import {addPouchPlugin, addRxPlugin, createRxDatabase, getRxStoragePouch, RxDatabase} from "rxdb";
// import StockDataSchema from "./schema/StockDataSchema";
// import { interval } from 'rxjs';
// import AverageCalculatorSchema from "./schema/calculator/AverageCalculatorSchema";
// import {RxDatabaseBase} from "rxdb/dist/types/rx-database";
// @Injectable({
//   providedIn: 'root'
// })
// export class RxdbServiceService {
//   //private _db: RxDatabase<any>;
//   constructor() {
//     //this.ensureDatabase();
//   }
//   // private async addCollection(){
//   //   await this._db.addCollections({
//   //     // key = collectionName
//   //     stockdata: {
//   //       schema: StockDataSchema,
//   //       statics: {},                          // (optional) ORM-functions for this collection
//   //       methods: {},                          // (optional) ORM-functions for documents
//   //       attachments: {},                      // (optional) ORM-functions for attachments
//   //       options: {},                          // (optional) Custom parameters that might be used in plugins
//   //       migrationStrategies: {},              // (optional)
//   //       autoMigrate: true,                    // (optional) [default=true]
//   //       cacheReplacementPolicy: function(){}, // (optional) custom cache replacement policy
//   //     },
//   //     averagecalculation: {
//   //       schema: AverageCalculatorSchema,
//   //       statics: {},                          // (optional) ORM-functions for this collection
//   //       methods: {},                          // (optional) ORM-functions for documents
//   //       attachments: {},                      // (optional) ORM-functions for attachments
//   //       options: {},                          // (optional) Custom parameters that might be used in plugins
//   //       migrationStrategies: {},              // (optional)
//   //       autoMigrate: true,                    // (optional) [default=true]
//   //       cacheReplacementPolicy: function(){}, // (optional) custom cache replacement policy
//   //     },
//   //
//   //   });
//   // }
//   //
//   // public async ensureDatabase(){
//   //   const numb = interval(1000);
//   //   addPouchPlugin(require('pouchdb-adapter-idb'));
//   //
//   //
//   //   const db=await createRxDatabase({
//   //     name: 'stockdb',
//   //     storage: getRxStoragePouch('idb'),
//   //     eventReduce: false,
//   //     multiInstance: false
//   //   })
//   //   this._db=db;
//   //   //this.subscribeToChanges('averagecalculation');
//   //   db.removeCollection('stockdata').then(data=>{
//   //     console.log(data)
//   //   })
//   //   db.removeCollection('averagecalculation').then(data=>{
//   //     console.log(data)
//   //   })
//   //  this.addCollection();
//   //
//   //   console.log(this._db)
//   //   this.subscribeToChanges('averagecalculation')
//   //
//   //  // console.log(db)
//   //  // numb.subscribe(next=>{
//   //  //    db['stockdata'].insert({code:'asiains'+next,opening:2});
//   //  // })
//   // }
//   // public insert(tableName:string,data:any){
//   //   this._db[tableName].insert(data);
//   // }
//   // public subscribeToChanges(tableName:string){
//   //   this._db[tableName].find().$.subscribe((data: any)=>{
//   //     console.log(data)
//   //   });
//   // }
//
//
// }
