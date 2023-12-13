import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private error: ErrorService){
    this.regForm = this.fb.group({
      username:['',[Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      password:['',[Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword:[''],
    });
  }

  registerUser(){
    if(this.regForm.valid && this.regForm.get('password')?.value == this.regForm.get('confirmPassword')?.value){
      const user: User = {
        username: this.regForm.get('username')?.value,
        password: this.regForm.get('password')?.value
      }
      this.userService.register(user).subscribe({
        next: (v) => {
          this.router.navigate(['/login']);
          console.log('User registered :)');
        },
        error: (e) => this.error.errorShowsUp(e)
      });
    }else{
      alert('Formulario inválido!')
    }
  }

}
