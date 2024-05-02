import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, JsonPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    JsonPipe,
    CommonModule
  ],
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
