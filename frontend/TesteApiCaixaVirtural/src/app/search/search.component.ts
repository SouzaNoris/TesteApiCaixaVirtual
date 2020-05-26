import { Component, Input } from "@angular/core";
import { GridOptions } from "@ag-grid-community/all-modules";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() nomeTela: string = "search base";

  private gridOptions: GridOptions;
  public rowData: any[];
  private columnDefs: any[];

  constructor() {
    this.gridOptions = <GridOptions>{
      onGridReady: () => {
        this.gridOptions.api.sizeColumnsToFit();
      }
    };
    this.columnDefs = [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }
    ];
    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ];
  }

}