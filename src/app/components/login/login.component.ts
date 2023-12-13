import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  logForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private error: ErrorService){
    this.logForm = this.fb.group({
      username:[''],
      password:['',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    });
  }

  loginUser(){
    if(this.logForm.valid){
      const user: User = {
        username: this.logForm.get('username')?.value,
        password: this.logForm.get('password')?.value
      };
      this.userService.login(user).subscribe({
        next: (token) => {
          this.router.navigate(['/dashboard']);
          localStorage.setItem('token', token);
        },
        error: (e) => this.error.errorShowsUp(e)
      });
    }else{
      alert('MAL!');
    }
  }

}
