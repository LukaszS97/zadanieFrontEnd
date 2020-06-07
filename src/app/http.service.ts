import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './models/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPresonList(): Observable<Array<Person>> {
    return this.http.get<Array<Person>>('https://jsonplaceholder.typicode.com/users');
  }
}
