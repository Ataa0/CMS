import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError ,} from 'rxjs/operators';
import {User} from './shared/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) {

   }
  Login(user : {email : string,password:string}):Observable<{message : string,token : string}>{
    console.log('email :',user.email);
    const httpOptions={//headers information
      headers:new HttpHeaders({
        'content-Type':'application/json'
      })
    };
    return this.http.post<{message : string,token : string}>('http://localhost:3000/users/login',user,httpOptions)
    .pipe(catchError((err) => {
      console.log('error caught in service')
      console.error(err);
      return throwError(err);    //Rethrow the error back to component
    }));
  }
}
