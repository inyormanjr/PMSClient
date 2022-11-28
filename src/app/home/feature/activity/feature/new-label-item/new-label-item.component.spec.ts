import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLabelItemComponent } from './new-label-item.component';

describe('NewLabelItemComponent', () => {
  let component: NewLabelItemComponent;
  let fixture: ComponentFixture<NewLabelItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLabelItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLabelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
