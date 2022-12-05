import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class GetFruitsService {

  constructor( private _http:HttpClient) { }
  async  getListeFruits(){
    const result  = this._http.get('https://www.fruityvice.com/api/fruit/all',httpOptions).toPromise();
    return result;
 }
}
