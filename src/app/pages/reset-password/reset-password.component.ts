import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public user: User;  

  ngOnInit() {  
      this.user = {  
          username: '',  
          email: '',  
          password: '',  
          confirmPassword: ''  
      };  
  }  

  onSubmit(model: User) {  
    console.log("model");  
  }  
}  

export interface User {  
    username: string;  
    email: string;  
    password: string;  
    confirmPassword: string;  
}  



