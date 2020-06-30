import { Component,Inject } from '@angular/core';
import {ProductService} from './product.service';
import {Product} from './shared/product';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from './login.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {User} from './shared/user';
import {CommonModule} from '@angular/common';
export interface DialogData {
  email: string;
  status : boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loginForm : FormGroup;
  user : {email : string,password : string};
  userData : User;
  Products : Product[];
  constructor(private productService : ProductService,private loginService : LoginService,
     fb : FormBuilder, public dialog : MatDialog){
    this.loginForm = fb.group({
      email : '',
      password : ''
    });
    console.log('hwh',this.loginForm);
  }

  Login(){
    console.log('here',this.loginForm);
    this.user = this.loginForm.value;
    this.loginService.Login(this.user)
      .subscribe((response)=>{
      this.openDialog(true)
      },(error)=>{
        if(error.status==401){
            this.openDialog(false)
          }
      })
  }

  openDialog(status : boolean): void {
    console.log('status = ',status)
    const dialogRef = this.dialog.open(LoginErrorModal, {
      width: '250px',
      data: {email: this.user.email,status: status}
    });}
  getAllProducts(){
    this.productService.getProducts()
    .subscribe((products)=>{
      this.Products = products;//.productsArray;
      console.log(this.Products);
    });
    
  }
}


@Component({
  selector: 'login-error-modal',
  templateUrl: 'login-error-modal.html'
})
export class LoginErrorModal {
  constructor(
    public dialogRef: MatDialogRef<LoginErrorModal>,
     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}