import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonForm } from '../interfaces/jsonformcontrols';

@Injectable({
  providedIn: 'root',
})
export class TableServiceService {
  private Url: string = ' http://localhost:3000/controls';
  private DataURL: string = '  http://localhost:3000/tableData';
  constructor(private http: HttpClient) {}

  getTableData(): Observable<any> {
    return this.http.get(`${this.Url}`);
  }
  getTableEntries(): Observable<any> {
    return this.http.get(`${this.DataURL}`);
  }
  getBypagination(
    pageIndex: number,
    pageSize: number,
    sort: string,
    order: string
  ):Observable<JsonForm> {
    return this.http.get<JsonForm>(
      `${this.DataURL}?_limit=${pageSize}&_page=${pageIndex}&_sort=${sort}&_order=${order}`
    );
  }
}
