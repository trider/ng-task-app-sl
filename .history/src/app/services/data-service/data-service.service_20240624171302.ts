import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './IUser';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private userData = new BehaviorSubject({} as IUser);
  currentUser = this.userData.asObservable();
  constructor() { }

  getUserData() {
    this.userData.getValue()
  }

  setUserData(user:any) {
    this.currentUser = this.userData.asObservable();
  }

}
