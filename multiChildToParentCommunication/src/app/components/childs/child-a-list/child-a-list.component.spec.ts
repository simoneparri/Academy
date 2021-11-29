import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAListComponent } from './child-a-list.component';

describe('ChildAListComponent', () => {
  let component: ChildAListComponent;
  let fixture: ComponentFixture<ChildAListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildAListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
