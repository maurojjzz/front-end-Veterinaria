import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getAll(){
  this.http.get<any>(environment.api).subscribe((data)=>{
    console.log(data)
  })
  }


}
