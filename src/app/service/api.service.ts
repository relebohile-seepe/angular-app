import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Hero } from '../model/Hero';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // In production, You would place the url and other
  // set of important data in a .env file
  private apiUrl = 'https://localhost:7285/api/Heroes';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient) {}

  //Getting the list of hero's
  getUsers(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }


 // This function is used to post an action for a Hero with a given 'name'.
// It sets the 'action' to 'evolve', creates HTTP parameters, and sends a POST request to the API.
postHeroAction(name: string): Observable<Hero> {
  // Define the action as 'evolve'.
  const action = 'evolve';

  // Create a new instance of HttpParams and set the 'action' parameter to 'evolve'.
  const httpParams = new HttpParams().set('action', action);

  // Send a POST request to the API with the provided 'name', HTTP headers, and parameters.
  return this.http.post<Hero>(this.apiUrl, { name }, { headers: this.httpOptions.headers, params: httpParams });
}

  
  



  
}
