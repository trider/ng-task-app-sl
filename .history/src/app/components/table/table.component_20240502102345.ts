import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  @Input() tableData: any;
  @Input() tableCols: any;
  constructor() { }
  ngOnInit(): void {
  }

}
