import { Component, OnInit } from '@angular/core';    
import { RegisterEmployeeService } from '../register-employee.service';    
import {Register} from '../register';    
import {Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';    
    
@Component({    
  selector: 'app-register',    
  templateUrl: './register.component.html',    
  styleUrls: ['./register.component.css']    
})    
export class RegisterComponent implements OnInit {    
  data = false;    
  employeeForm: any;    
  message!: string;  
  constructor(private formbulider: FormBuilder,private loginService:RegisterEmployeeService) { }    
    
  ngOnInit() {    
     this.employeeForm = this.formbulider.group({    
      id: ['', [Validators.required]],
      firstName: ['', [Validators.required]],    
      lastName: ['', [Validators.required]],    
      gender: ['', [Validators.required]],    
      department: ['', [Validators.required]]   
    });    
  }    
   onFormSubmit()    
  {    
    const user = this.employeeForm.value;    
    this.Createemployee(user);    
  }    
  Createemployee(register:Register)    
  {    
  this.loginService.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.message = 'Data saved Successfully';    
      this.employeeForm.reset();    
    });    
  }    
}    