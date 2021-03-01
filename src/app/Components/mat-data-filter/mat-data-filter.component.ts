
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import {SharedServiceService} from "../../Services/shared-service.service"

@Component({
  selector: 'app-mat-data-filter',
  templateUrl: './mat-data-filter.component.html',
  styleUrls: ['./mat-data-filter.component.css']
})

export class MatDataFilterComponent implements OnInit,AfterViewInit  {

  columnsToDisplay: string[] = ['dishname','price', 'dishimg'];
  dataSource: MatTableDataSource<any>;
 @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(public sharedsrv:SharedServiceService){ }

  ngAfterViewInit()
  {
    try{
      this.dataSource.sort = this.sort;
    }
    catch(e){}
  }

  ngOnInit() {
    try{ 
      //this.userdata1 = this.sharedser.userdata
      //this.username = this.userdata1.Data.username
          const menuresp = this.sharedsrv.fetchmenu().subscribe((resp)=>{
          //this.dataSource = resp.dish
          this.dataSource = new MatTableDataSource(resp.dish);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         })
         }
         catch(ex)
         {
          const menuresp = this.sharedsrv.fetchmenu().subscribe((resp)=>{
          this.dataSource = new MatTableDataSource(resp.dish);
          this.dataSource = resp.dish;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
         })
         }

    }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.dishname.trim().toLowerCase();
  }

}
