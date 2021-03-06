import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';
//import { PasswordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  profileForm : FormGroup;
  test:boolean;

 /* onButtonClick(){

    localStorage.setItem("formdata",JSON.stringify(this.profileForm.value));

    } */

    constructor(private user1:UserService,private router:Router) { 
    this.profileForm = new FormGroup({
      name:new FormControl('', [Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]),
      lname:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]),
      email:new FormControl('',[Validators.required,Validators.maxLength(30),Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      con : new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10),Validators.pattern('[0-9]*')]),
      //pass:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]),
      //cpass:new FormControl('',[Validators.required,Validators.minLength(5),Validators.minLength(5)]),
      
      pass: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{0,16})')]),
      cpass: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{0,16})')]),
      gen :new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-zA-Z]+$")]),
      emp :new FormControl('',[Validators.required,Validators.maxLength(4),Validators.minLength(4),Validators.pattern('[0-9]*')]),
    }); 
  }

    onButtonClick(){
      this.user1.check(this.profileForm.value)
      this.router.navigate(['/heroes']);
    }

  type:string="password";
  showHide()
  {
      if(this.type==="text")
        this.type="password";
     else
      this.type="text";   
  }

  showHide1()
  {
      if(this.type==="text")
        this.type="password";
     else
      this.type="text";   
  }

  function1()
  {
      if(this.profileForm.value.pass!==this.profileForm.value.cpass)
      {
        //alert("Password entered is wrong");
          console.log("wrong");
          this.test=false;

      }
      else
      {
        console.log("right");
        this.test=true;
      }
      return this.test;
  }
  
 
  ngOnInit() {
    console.log(" qw")
    var item;
    if(window.location.pathname  =="/form"){
      item = this.user1.getData();
      this.profileForm.patchValue({
      name:item.name,
      lname:item.lname,
      email:item.email,
      con:item.con,
      
      pass:item.pass,
      gen:item.gen,
      emp:item.emp
      


  })
  console.log("poi")
 }


  }
  
}
