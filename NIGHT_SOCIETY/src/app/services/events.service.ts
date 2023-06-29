import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Event } from '../models/eventN.model';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
 
  urlApi = `${environment.API_URI}/event`
  eventToCreate: Event = new Event()
  // 
  allEvent: Event[] = []
  filterEvent: Event[] = []


  constructor(private http: HttpClient ) { }


  getAllEvent(){
    return this.http.get(`${this.urlApi}/getAll`)
   }

   

   createEvent(data: Event){
    return this.http.post(`${this.urlApi}/create`, data)
   }

  //  deleteEvent(_id: string){
  //   return this.http.delete(`${this.urlApi}/delete/${_id}`)
  //  }

   updateEvent(data: Event){
    let dataToUpdate = {
      _id: data._id,
      dataToUpdate: data
    }
    return this.http.put(`${this.urlApi}/update`, dataToUpdate)
   }

 

}

  






