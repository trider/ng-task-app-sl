import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgbModal, 
    NgbActiveModal, 
    UntypedFormControl, 
    UntypedFormGroup
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() tableCols: any = null;
  @Input() tableData: any = null;
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
    private modalService: NgbModal,
  ) { 
   
  }

  ngOnInit(): void {
  }

}
