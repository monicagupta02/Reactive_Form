import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
//import { PasswordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  profileForm : FormGroup

  constructor() { 
    this.profileForm = new FormGroup({
      name:new FormControl('', [Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]),
      lname:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]),
      email:new FormControl('',[Validators.required,Validators.maxLength(30),Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      con : new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')]),
      pass:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      cpass:new FormControl('',[Validators.required,Validators.maxLength(20)]),
      gen :new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]),
      emp :new FormControl('',[Validators.required,Validators.maxLength(4),Validators.minLength(4),Validators.pattern('[0-9]*')]),
    });
    
  }
  ngOnInit() {}
  
}
