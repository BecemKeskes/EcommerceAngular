import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scategorie } from '../models/scategorie';


@Injectable({
  providedIn: 'root'
})
export class ScategorieService {
  baseurl="http://localhost:3001/api/scategories";

  constructor(private http:HttpClient) { }
  getscategorie():Observable<Scategorie[]>{
    return this.http.get<Scategorie[]>(this.baseurl)
  }
  ListScategories():Observable<Scategorie[]>
 { return this.http.get<Scategorie[]>(this.baseurl);
 }
}
