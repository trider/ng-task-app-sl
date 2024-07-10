import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './IUser';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private userData = new BehaviorSubject<IUser>({
    _id: '',
    created: '',
    email: '',
    isActive: false,
    isLoggedIn: false,
    name: '',
    password: '',
    status: '',
    updated: '',
    userId: 0,
    userName: ''
  });
  currentUser = this.userData.asObservable();
  constructor() { }

  getUserData() {
    this.userData.getValue()
  }

  setUserData(user: IUser) {
    this.currentUser.next(user)
  }

}
