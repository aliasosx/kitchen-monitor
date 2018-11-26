import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer, Observable } from 'rxjs';
import * as socketIO from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }
  observer: Observer<any>;
  getOrders() {
    const socket = socketIO('http://localhost:3000/');
    socket.on('data', response => {
      return this.observer.next(response.data);
    });
    return this.createObservable();
  }
  createObservable() {
    return new Observable(observer => this.observer = observer);
  }
}
