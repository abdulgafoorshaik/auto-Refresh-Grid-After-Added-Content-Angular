import { Component, OnInit } from '@angular/core';
import {getUserService} from '../get-user.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private service:getUserService) { }

  userNames;

  serviceSubscriber:any;

  ngOnInit() {
    this.service.Updated.subscribe(()=>{
      this.getDetails();
    });
    this.getDetails();
  }


  getDetails(){
    this.serviceSubscriber = this.service.getUser().subscribe(data=>{
      this.userNames = data;
    })
  }

}
