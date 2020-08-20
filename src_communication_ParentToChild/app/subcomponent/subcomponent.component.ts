import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit 
{
  // Add input decorator as it will receve the data from parent
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
