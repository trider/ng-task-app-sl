import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private tasks = new BehaviorSubject<any>([]);
  public tasksList = this.tasks.asObservable();
 

  constructor() { }

  updateTasks(tasks: any) {
    this.tasks.next(tasks)
  }
  
}
