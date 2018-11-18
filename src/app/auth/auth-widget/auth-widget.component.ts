import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/user.interface';

@Component({
  selector: 'app-auth-widget',
  templateUrl: './auth-widget.component.html',
  styleUrls: ['./auth-widget.component.scss']
})
export class AuthWidgetComponent implements OnInit {
  public currentUser: User;
  public isUserLoggedIn = true;

  constructor() {
    this.currentUser = {
      avatarUrl: '',
      firstName: 'dmitriy',
      lastName: 'Pososhenko',
    };
  }

  ngOnInit() {
  }

  public get fullName() {
    const firstName = this.currentUser.firstName;
    const lastName = this.currentUser.lastName;

    return `${ firstName[0].toUpperCase() +  firstName.slice(1) } ${ lastName[0].toUpperCase() }.`;
  }

}
