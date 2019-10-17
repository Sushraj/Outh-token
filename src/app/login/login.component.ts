import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';    


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit() {
    // if(window.sessionStorage.getItem('userToken')!=null){
    //   this.router.navigate(['/Product']);
    // }
  }

  loginForm = new FormGroup({
    UserName: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required)  
  })

  onGetToken(){
    const user=this.loginForm.controls['UserName'].value;
    const pass=this.loginForm.controls['Password'].value;
    this.productService.UserAuthentication(user,pass).subscribe((data:any)=>{
      window.sessionStorage.setItem('userToken',data.access_token);
      // this.router.navigate(['/Product']);
    });
  }
}
