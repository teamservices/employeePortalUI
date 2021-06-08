import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Register } from "../app/register";

@Injectable({
  providedIn: 'root'
})
export class RegisterEmployeeService {
  Url :string;    
  header : any;  
  constructor(private http : HttpClient) {   
  
    this.Url = 'http://localhost:8080/employee/saveEmployee';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
  CreateUser(register:Register)  
  {  
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
   return this.http.post<Register[]>(this.Url + '/createcontact/', register, httpOptions)  
  }  
}
