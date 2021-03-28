import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDataFilterComponent } from './mat-data-filter.component';

describe('MatDataFilterComponent', () => {
  let component: MatDataFilterComponent;
  let fixture: ComponentFixture<MatDataFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDataFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDataFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
