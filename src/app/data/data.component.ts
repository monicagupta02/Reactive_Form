import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit
{
  item;
  edit(){
    
    this.route.navigate(['/form']);
   }
  constructor(private user1: UserService,private route:Router) { 

    //this.item = JSON.parse(localStorage.getItem("formdata"));

  }

  ngOnInit() {
    this.item = this.user1.getData();
    console.log(this.item, "in second componenet");
  }


   
}
