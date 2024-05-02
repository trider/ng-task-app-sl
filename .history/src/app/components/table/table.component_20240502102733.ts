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
  title:string = "Add Task";
  item:any = null;
  constructor() { }
  ngOnInit(): void {
  }
  openModal(content:any, title:string, item:any = null) {
    this.title = title;
    // if(this.title === "Edit Task"){
    //   this.item = item;
    //   this.taskForm.patchValue({
    //     name: item.name,
    //     description: item.description,
    //     status: item.status,
      
    //   });
    // }
    // this.modalService.open(content, { size: 'sm', scrollable: true })
  }

  onSubmit(){
    if(this.title === "Add Task"){
      
    }
    else if(this.title === "Edit Task"){
     
    }
  }

  deleteItem(item:any){
    // this.tableData = this.tableData.filter((i:any) => i !== item);
    
  }

  deleteAll(){
   
  }

  undeleteAll(){
    
      
  }

}
