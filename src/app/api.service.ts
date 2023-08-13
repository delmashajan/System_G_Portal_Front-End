import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchSurgeries=()=>{
    return this.http.get("http://localhost:8081/viewallsurgeries")
  }

  updateStatus=(dataToSend:any)=>{
    return this.http.put("http://localhost:8081/updateticketstatus",dataToSend)
  }

  dateFilter=(date:any)=>{
    return this.http.get("http://localhost:8081/dateFiler/"+date)
  }

  rescheduleAdd=(data:any)=>{
    return this.http.post("http://localhost:8081/addMessage",data);
  }
}
