import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllbookComponent } from './view-allbook.component';

describe('ViewAllbookComponent', () => {
  let component: ViewAllbookComponent;
  let fixture: ComponentFixture<ViewAllbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
