import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poem } from '../Models/Poem';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PoemService {
  poemsUrl:string =  'https://jsonplaceholder.typicode.com/photos';
  poemsLimit:string = '?_limit=10';

  constructor(private http:HttpClient) { }

  getPoems():Observable<Poem[]> {
    return this.http.get<Poem[]>(`${this.poemsUrl}${this.poemsLimit}`);
  }

  toggleCompleted(poem: Poem):Observable<any> {
    const url = `${this.poemsUrl}/${poem.id}`;
    return this.http.put(url, poem, httpOptions);
  }
}
