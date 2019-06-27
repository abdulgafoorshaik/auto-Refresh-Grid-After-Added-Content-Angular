import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap }  from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class getUserService {

  private getUpdated = new Subject<void>();

  get Updated(){
    return this.getUpdated;
  }

  constructor(private service:HttpClient) { }

  getUser(){
   return   this.service.get("http://localhost:1111/messages")
  }

  setUser(user:any){
    return this.service.post("http://localhost:1111/update",user).pipe(
      tap(()=>{
        this.getUpdated.next();
      }))
    
  }
}
