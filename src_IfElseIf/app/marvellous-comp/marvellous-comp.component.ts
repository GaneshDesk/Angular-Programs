import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-comp',
  templateUrl: './marvellous-comp.component.html',
  styleUrls: ['./marvellous-comp.component.css']
})

export class MarvellousCompComponent implements OnInit 
{
  // Characteristics to hold batch name
  bname:string;
  str:string;

  // flag to maintain status of batch name
  flag:boolean = false;

  constructor() 
  {

  }

  ngOnInit() 
  {
  }

  // handler for the button event
  gun()
  {
    this.str = 'Your entered batch name is '+this.bname;  
  }

  // HAndler for text box
  fun(event:any)
  {
    // Flag indicates data is entered by the user
    this.flag = true;
    this.bname = (<HTMLInputElement>event.target).value;
  }
}
