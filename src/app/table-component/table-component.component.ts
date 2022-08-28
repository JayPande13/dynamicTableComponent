import { Component, EventEmitter, Input, Output } from '@angular/core';
import {JsonFormControls } from '../interfaces/jsonformcontrols';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
})
export class TableComponentComponent {
  @Input() table!: JsonFormControls[];
  @Input() tableData: any[] = [];
  @Output() SortRequest: EventEmitter<Record<string, any>> =
    new EventEmitter<Record<string, any>>();
  @Output() Paginate: EventEmitter<Record<string, number>> = new EventEmitter<
    Record<string, number>>();
  @Output() Navigate: EventEmitter<Record<string, unknown>> = new EventEmitter<
    Record<string, unknown>>();
  @Input() totalItem!: number;
  @Input() pageIndex: number = 1;
  @Input() pageSize: number = 4;
  @Input() loadingList: boolean = false;

  constructor() {}

  navigateTo(link: string, id: any, action: string) {
    this.Navigate.emit({ link: link, id: id, act: action });
  }

  sort(sort: { key: any; value: any }): void {
    this.SortRequest.emit({
      sorting: sort,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    });
  }

  pageindexchange(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.Paginate.emit({
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
    });
  }
  cancelled() {
    console.log('cancelled');
  }
}
