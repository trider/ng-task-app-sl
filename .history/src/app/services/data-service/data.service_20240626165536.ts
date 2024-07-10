import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './IUser';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject<string>('Not Authenticated');
  private userData = new BehaviorSubject<IUser>({});
  public currUser = this.userData.asObservable();
  public currentMessage = this.messageSource.asObservable();
  constructor() { }

  public changeMessage(message: string) {
    this.messageSource.next(message)
  }

  public setUser(user: IUser) {  
     this.userData.next(user);
  }



 

}
