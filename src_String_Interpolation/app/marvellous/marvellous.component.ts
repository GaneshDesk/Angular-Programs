import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  templateUrl: './marvellous.component.html',
  styleUrls: ['./marvellous.component.css']
})
export class MarvellousComponent implements OnInit 
{

  public Technology = "Node.js"
  constructor() { }

  ngOnInit() {
  }

  fun()
  {
    return "Learn "+ this.Technology;
  }
}
