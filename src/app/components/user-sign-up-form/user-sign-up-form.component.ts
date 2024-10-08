import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up-form',
  templateUrl: './user-sign-up-form.component.html',
  styleUrls: ['./user-sign-up-form.component.scss']
})
export class UserFormComponent {
  firstName: string;
  lastName: string;

  constructor(private router: Router) {
    this.firstName = "Micah",
    this.lastName = "Wendorf"
  }

  signIn(fName: string, lName: string){
    console.log(`Hello ${fName} ${lName}`);
    this.router.navigate(['/launchPage']);
  }
}
