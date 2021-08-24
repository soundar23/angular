import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse, AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {
  isLoggedIn = false;
  isLoading = false;
  error ='';
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }
  switchmode() {
   this.isLoggedIn = !this.isLoggedIn;
 }
 onSubmit(form:NgForm)
 {
   if(!form.valid)
   {
     return
   }
   this.isLoading = true;
   const email = form.value.email;
   const password = form.value.password;
   let authObserver!:Observable<AuthResponse>;
   if(this.isLoggedIn)
   {
    authObserver = this.authservice.signIn(email,password)
   }
   else
   {
    authObserver = this.authservice.signUp(email,password)
   }
   authObserver.subscribe(response=>{
    this.isLoading = false;
    console.log(response)
  },
  error=>{
    this.isLoading = false;
    this.error = 'An error ocurred'
    console.log(error)
  })
   form.reset();
 }
}
