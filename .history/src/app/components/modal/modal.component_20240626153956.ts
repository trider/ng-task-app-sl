import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from '@app/services/http-service/http.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    JsonPipe,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() tableData: any;
  @Input() tableCols: any;
  title:string = "Add Task";
  item:any = null;
  taskStatus:string[] = [
    "do",
    "doing",
    "done"
  ];
  user:any = JSON.parse(sessionStorage.getItem('user') || '{}');

  taskForm = new FormGroup({
    user: new FormControl(this.user.userName),
    name: new FormControl('New Task'),
    description: new FormControl('My new task description'),
    status: new FormControl('do'),
  });

  constructor(
    private modalService: NgbModal,
    private httpService: HttpService
  ) { }
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

      let taskId:number = this.tableData.length + 1;
      this.sendRequet(`/tasks/add/task/${this.user.userName}`,  
        {
            name: this.taskForm.value.name,
            description: this.taskForm.value.description,
            user: this.taskForm.value.user,
            added: new Date().toISOString(),
            updated: new Date().toISOString(),
            status: this.taskForm.value.status,
            taskId: taskId,
            isActive: true,
          
          });
      

    
    this.modalService.dismissAll();
  }

  sendRequet(url:string, payload:any){
    this.httpService.postServiceData(url, payload).subscribe((response:any) => { 

      console.log('response', response);
      if(response)location.reload();
       
    })

  }

}
