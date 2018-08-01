import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit
{
  item;
  
  constructor(private user1: UserService) { 

    //this.item = JSON.parse(localStorage.getItem("formdata"));

  }

  ngOnInit() {
    this.item = this.user1.getData();
    console.log(this.item, "in second componenet");
  }


   
}
