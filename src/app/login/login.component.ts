import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{User} from '../user';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  isSubmitted=false;
  user:User;
  constructor(private authService:AuthService,
    private router:Router,
    private formBuilder:FormBuilder) { }

  ngOnInit() {
  this.LoginForm=this.formBuilder.group({
    email:['',Validators.compose([Validators.required,Validators.email])],
    password:['',[Validators.required,
    Validators.pattern('[^a-zA-Z]+$')]]
  });
}
  get formControls() { 
    return this.LoginForm.controls; }

login(){
  

//   if(this.LoginForm.valid){
//     alert('User form is valid!!')
    
    
//             this.isSubmitted  =true;
//             this.authService.login(this.logininform.value);
//             this.router.navigateByUrl('/admin');
   
//   } else {
//     alert('User form is not valid!!')
//     return;
//   }
// }
console.log(this.LoginForm.value);
this.isSubmitted=true;
if(this.LoginForm.invalid){
  
  this.authService.login(this.LoginForm.value).subscribe(
    data =>{
      this.user=data;
      console.log(data);
      console.log(data.email);
    if(data.email !=null){
      this.isSubmitted=true;
      this.router.navigateByUrl('/admin');
    }
   
    }
  );
 
  }
}
}