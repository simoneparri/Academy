import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-child-a-list',
  templateUrl: './child-a-list.component.html',
  styleUrls: ['./child-a-list.component.css']
})
export class ChildAListComponent implements OnInit {
  @Input() list!:Array<User>;
  @Output()seletctedUser:EventEmitter<User>=new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
    console.log(new Date,"ngOnInit ChildAListComponent")
  }

  emitUser(user:User){
    console.log(new Date,"emitUser ChildAListComponent",user);
    this.seletctedUser.emit(user);
  }
}
