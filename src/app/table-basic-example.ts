import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: "table-basic-example",
  styleUrls: ["table-basic-example.css"],
  templateUrl: "table-basic-example.html"
})
export class TableBasicExample implements OnInit {
  displayedColumns: string[] = ["serialNum", "groupName", "metadataName", "metadataDescription",'custom', "value", "status", "action"];
  public dataSource: any
  public data: any;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.http
      .get(
        "https://primus-platform-api-application-dev.azurewebsites.net/v1/metadata/metadata?UserID=1&ApplicationID=1"
      )
      .subscribe(res => {
        console.log(res);
        this.data = res;
        this.dataSource = new MatTableDataSource(this.data);
      });
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
