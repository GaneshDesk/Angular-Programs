import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batches-list',
  templateUrl: './batches-list.component.html',
  styleUrls: ['./batches-list.component.css']
})
export class BatchesListComponent implements OnInit 
{
  public batches = 
  [
    {"Name":"Batch-1", "Fees":9000, "Duration":"4 Months"},
    {"Name":"Batch-2", "Fees":7500, "Duration":"4 Months"},
    {"Name":"Batch-3", "Fees":2500, "Duration":"3 Months"},
    {"Name":"Batch-4", "Fees":4000, "Duration":"3 Months"},
  ];

  ngOnInit() 
  {
  }

}
