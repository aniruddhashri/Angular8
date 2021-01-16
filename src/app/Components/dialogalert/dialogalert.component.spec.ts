import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogalertComponent } from './dialogalert.component';

describe('DialogalertComponent', () => {
  let component: DialogalertComponent;
  let fixture: ComponentFixture<DialogalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
