import { Component, OnInit, Input, Inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    

 
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() tableCols: any = null;
  @Input() tableData: any = null;
  private modalService = inject(NgbModal);
  isDisabled:boolean = true;
  colSpan:number = 0;
  taskStatus:string[] = [
    "do",
    "doing",
    "done"
  ]
  user:any = JSON.parse(sessionStorage.getItem('user') || '{}');

  taskForm = new UntypedFormGroup({
    user: new UntypedFormControl(this.user.userName),
    name: new UntypedFormControl('New Task'),
    description: new UntypedFormControl('My new task description'),
    status: new UntypedFormControl('do'),
  });

  title:string = "Add Task";
  item:any = null;
  constructor(
   
  ) { 
   
  }

  ngOnInit(): void {
  }

  openModal(content:any, title:string, item:any = null) {
    this.title = title;
    if(this.title === "Edit Task"){
      this.item = item;
      this.taskForm.patchValue({
        name: item.name,
        description: item.description,
        status: item.status,
      
      });
    }
    this.modalService.open(content, { size: 'sm', scrollable: true })
  }

  onSubmit(){
    if(this.title === "Add Task"){
      
    }
    else if(this.title === "Edit Task"){
      
    }
  }

  deleteItem(item:any){
    this.tableData = this.tableData.filter((i:any) => i !== item);
    
  }

  deleteAll(){
   
  }

  undeleteAll(){
    
  }

}
