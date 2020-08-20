import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit 
{
  // Same array is used in both components
  public batches = 
  [
    {"Name":"Batch-1", "Fees":9000, "Duration":"4 Months"},
    {"Name":"Batch-2", "Fees":7500, "Duration":"4 Months"},
    {"Name":"Batch-3", "Fees":2500, "Duration":"3 Months"},
    {"Name":"Batch-4", "Fees":4000, "Duration":"3 Months"},
  ];

  ngOnInit() {
  }

}
