import { Component, OnInit } from '@angular/core';
import { User, USERS_LIST } from 'src/app/models/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  public list!: Array<User>;
  public detail: User | undefined = undefined;

  constructor() {}

  ngOnInit(): void {
    console.log(new Date(), 'ngOnInit ParentComponent', this.detail);
    this.popolateChildsA();
  }

  popolateChildsA() {
    this.list = USERS_LIST;
  }

  writeDetailTochildB(user: User) {
    console.log(new Date(), 'writeDetailTochildB ParentComponent', user);
    this.detail = user;
  }

  reset(): void {
    console.log(new Date(), 'reset ParentComponent');
    this.detail = undefined;
  }
}
