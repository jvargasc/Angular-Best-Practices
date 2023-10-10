import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { UserRepositoryService } from '../services/user-repository.service'

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  credentials: any = {};

  constructor(private router: Router, private userRepositoryService: UserRepositoryService) { }

  signIn(credentials: any) {
    this.userRepositoryService.signIn(credentials)
      .subscribe({
        error: (err) => { console.error(err, 'Error') },
        complete: () => this.router.navigate(['/catalog'])
      })
  }

  cancel() {
    this.router.navigate(['/'])
  }
}
