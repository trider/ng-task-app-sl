import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpService } from '../http-service/http.service';





@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = new BehaviorSubject<any>([]);
  public tasksList = this.tasks.asObservable();
 

  constructor(
    private httpService: HttpService,
  ) { }


  public getTasks(user:any, isFiltered:boolean = false, status:string='done'):Observable<any>{
    
    return this.httpService.getServiceData(`/tasks/get/tasks/${user.userName}`).pipe(
      map(task => {
        if(isFiltered) task = task.filter((task:any) => task.status === status);
        return task
      })
    )

  }

 

  public updateTasks(tasks: any) {
    this.tasks.next(tasks)
  }

}
