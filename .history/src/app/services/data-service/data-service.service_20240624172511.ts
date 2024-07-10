import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './IUser';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private messageSource = new BehaviorSubject<string>('default message');
  private userData = new BehaviorSubject<IUser>({});
  public currUser = this.userData.asObservable();
  public currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  setUser(user: IUser) {
    this.currUser.subscribe((user:IUser) => {
     return this.userData.next(user);
  }
}



 

}
