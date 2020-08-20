import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchService 
{
 constructor() { }

 // Write method in service class which returns array 
 // of batch details
GetBatchDetails()
{
  return [
    {"Name":"Batch-1", "Fees":9000, "Duration":"4 Months"},
    {"Name":"Batch-2", "Fees":7500, "Duration":"4 Months"},
    {"Name":"Batch-3", "Fees":2500, "Duration":"3 Months"},
    {"Name":"Batch-4", "Fees":4000, "Duration":"3 Months"},
        ];
}

}
