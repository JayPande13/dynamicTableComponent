import { Component, OnInit } from '@angular/core';
import { JsonForm, JsonFormControls } from './interfaces/jsonformcontrols';
import { tableData } from './interfaces/tableData';
import { TableServiceService } from './services/table-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'tableComponent';
  table!:JsonFormControls[];
  tableData:tableData[] = [];
  pageIndex: number = 1;
  pageSize: number = 3;
  totalItems!: number;
  sortName: string = '';
  sortOrder: string = '';
  constructor(private tableService: TableServiceService) {}
  ngOnInit(): void {
    this.getData();
    this.getPagination({ pageIndex: this.pageIndex, pageSize: this.pageSize });
    this.getEntries();
  }

  getData() {
    this.tableService.getTableData().subscribe((res) => {
      (this.table = res);
    });
  }
  getEntries() {
    this.tableService.getTableEntries().subscribe((res) => {
      this.totalItems = res.length;
    });
  }
  getSort(sort: Record<string, any>) {
   console.log(sort);
    // if (sort['value'] == 'descend') {
    //   this.sortOrder = 'desc';
    // }
    // if (sort['value'] == 'ascend') {
    //   this.sortOrder = 'asc';
    // } else {
    //   this.sortOrder = '';
    // }
    // this.sortName = sort['key'];
    // this.tableService
    //   .getBypagination(
    //     sort['pageSize'],
    //     sort['pageIndex'],
    //     sort['key'],
    //     sort['value']
    //   )
    //   .subscribe(res=> this.TableEntries=res);
  }
  getPagination(event: Record<string, number>) {
    // console.log(event['pageIndex'], event['pageSize'])
    this.tableService
      .getBypagination(
        event['pageIndex'],
        event['pageSize'],
        this.sortName,
        this.sortOrder
      )
      .subscribe((res: any) => {
        this.tableData = res;
      });
  }
  routerLink(event: any) {
  console.log(event);
  }
}
