import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {
 
  @Input()user!: User;
  @Output()seletctedUser:EventEmitter<User>=new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
    console.log(new Date,"ngOnInit ChildAComponent");
  }

  emitUser(){
    console.log(new Date,"emitUser ChildAComponent",this.user);
    this.seletctedUser.emit(this.user);
  }

}
