import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input()
  columnHeader: any[];
  @Input()
  tableData: any;
  dataSource;

  @Output()
  events: EventEmitter<any> = new EventEmitter<any> ();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  get keys() { return this.columnHeader.map(({ key }) => key); }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;
  }

  excuteEvent(event: string) {
    switch(event){
      case 'Edit':
        this.events.emit('Edit');
        break;
      case 'Delete':
        this.events.emit('Delete');
        break;
      case 'Show':
        this.events.emit('Show');
        break;
    }
  }

}
