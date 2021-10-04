import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService  {

  constructor(private httpClient: HttpClient) { }
  public userLogin(data:any):Observable<any> {
    try {
      return this.httpClient.post(environment.baseUrl + "users/login", data);
     
    } catch (error) {
      console.log(error,'invalid')
      return(error)
    }
    
  }
 
  public userRegister(data:any):Observable<any> {
    try {
      return this.httpClient.post(environment.baseUrl + "users/register", data);
     
    } catch (error) {
      console.log(error,'invalid')
      return(error)
    }
    
  }
 
  public privateCompanyRegister(data:any):Observable<any> {
    try {
      return this.httpClient.post(environment.baseUrl + "details/register", data);
     
    } catch (error) {
      console.log(error,'invalid')
      return(error)
    }
  }
    
    public privateCompanyInfo(data:any):Observable<any> {
      try {
        return this.httpClient.post(environment.baseUrl + "company-register/register", data);
       
      } catch (error) {
        console.log(error,'invalid')
        return(error)
      }
  }
}
