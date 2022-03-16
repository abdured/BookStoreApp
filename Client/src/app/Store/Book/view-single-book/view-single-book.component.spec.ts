import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleBookComponent } from './view-single-book.component';

describe('ViewSingleBookComponent', () => {
  let component: ViewSingleBookComponent;
  let fixture: ComponentFixture<ViewSingleBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
