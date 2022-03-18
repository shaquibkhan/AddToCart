import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL : any = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProduct(){
   return this.http.get<any>(this.baseURL)
    .pipe(map((res:any)=>{
      // console.log(res);
      return res;
    }))
  }
}
