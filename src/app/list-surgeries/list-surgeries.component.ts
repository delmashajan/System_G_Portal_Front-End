import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-surgeries',
  templateUrl: './list-surgeries.component.html',
  styleUrls: ['./list-surgeries.component.css']
})
export class ListSurgeriesComponent {

  constructor(private api:ApiService){
    api.fetchSurgeries().subscribe(
      (response)=>{
        this.surgeries=response
      }
    )
  }
  surgeries:any=[]

  updateStatusClick=(id:any,status:any)=>{
    let dataToSend:any={
      "id":id,"status":status
    }

    this.api.updateStatus(dataToSend).subscribe(
      (response:any)=>{
        console.log(response)
      }
      
    )
  }

}
