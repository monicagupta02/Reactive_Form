import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit
{
  item;
  constructor() { 

    this.item = JSON.parse(localStorage.getItem("formdata"));

  }

  ngOnInit() {
  }


   
}
