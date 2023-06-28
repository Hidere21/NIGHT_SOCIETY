import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/eventN.model';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { CalificarComponent } from '../routes/calificar/calificar.component';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  uploadImagesToServer(formData: FormData): Observable<any> {
    const url = `${this.urlApi}/create`;

    return this.http.post(url, formData);
  }

  urlApi = `${environment.API_URI}/event`;
  eventToCreate: Event = new Event();
  //
  allEvent: Event[] = [];
  filterEvent: Event[] = [];

  constructor(private http: HttpClient) {}

  getAllEvent() {
    return this.http.get(`${this.urlApi}/getAll`);
  }

  // getCalificarEvent() {
  //   return this.http.post(`${this.urlApi}/calificar`);
  // }


  createEvent(data: Event) {
    return this.http.post(`${this.urlApi}/create`, data);
  }

  rateEvent(data: any) {
    return this.http.put(`${this.urlApi}/calificar`, data);
  }

  //  deleteEvent(_id: string){
  //   return this.http.delete(`${this.urlApi}/delete/${_id}`)
  //  }

  updateEvent(data: Event) {
    let dataToUpdate = {
      _id: data._id,
      dataToUpdate: data,
    };
    return this.http.put(`${this.urlApi}/update`, dataToUpdate);
  }

  uploadEventImages() {
    return this.http.post(`${this.urlApi}/update`, FormData);
    // boton para cargar imagens y con un get llamar a la imagen
  }
}
