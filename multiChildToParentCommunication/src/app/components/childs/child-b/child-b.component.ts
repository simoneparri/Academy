import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {
  @Input()user!: User|undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(new Date,"ngOnInit ChildBComponent");
  }

}
