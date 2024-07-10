import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private tasks = new BehaviorSubject<any>([]);
  public tasksList = this.tasks.asObservable();
 

  constructor() { }

  filterTasks(status: string) {
    this.tasksList.subscribe(tasks => {
      tasks.filter((task: any) => task.status === status)
    })
  

  }

  updateTasks(tasks: any) {
    this.tasks.next(tasks)
  }

}
