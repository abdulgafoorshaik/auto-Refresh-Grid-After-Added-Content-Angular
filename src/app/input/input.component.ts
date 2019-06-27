import { Component, OnInit } from '@angular/core';
import {getUserService} from '../get-user.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  user = {
    name : ''
  }
  userSubscriber:any;

  constructor(private service: getUserService) { }

  

  ngOnInit() {

  }

  
  setDetails(usr){
    this.userSubscriber = this.service.setUser(usr).subscribe(data=>{
    },
    error=>{
    console.error(error);
    }
    );
    this.user.name = " ";
  }

  ngOnDestroy(){
    this.userSubscriber.unsubscribe();
  }

}
