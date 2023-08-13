
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-list-surgeries',
  templateUrl: './list-surgeries.component.html',
  styleUrls: ['./list-surgeries.component.css']
})

export class ListSurgeriesComponent {

  priorityColor: any = {

    'Very High': 'rgb(196, 17, 71)',
    'High': 'red',
    'Normal': 'green'

  };
  selectedOption: any;
  constructor(private api: ApiService, private location: Location) {
    api.fetchSurgeries().subscribe(
      (response) => {
        this.surgeries = response
        console.log(response)
      }
    )
  }
 
  ticket_id:any
  message = "This surgery is rescheduled after 2 days."
  reschedule(id: any) {
    let data: any = {
      "ticket_id": id,
      "message": this.message
    }
    this.api.rescheduleAdd(data).subscribe(
      (res:any)=>{
        console.log(res);
        
      }
    )
  }

  surgeries: any = []
  filterDate: any = []
  updateStatusClick(id: any, status: String) {
    this.selectedOption = status;

    let dataToSend: any = {
      "id": id, "status": status
    }

    this.api.updateStatus(dataToSend).subscribe(
      (response: any) => {
        console.log(response)
        location.reload()
      }
    )
  }
  date: any = '';
  dateFilterClick = (date: any) => {

    this.selectedOption = date;
    console.log(date)
    this.api.dateFilter(date).subscribe(
      (response: any) => {
        this.date = 'date'
        this.filterDate = response
        console.log(response)

      }
    )

  }

}


