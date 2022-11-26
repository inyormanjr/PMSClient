import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityLineItemComponent } from './activity-line-item.component';

describe('ActivityLineItemComponent', () => {
  let component: ActivityLineItemComponent;
  let fixture: ComponentFixture<ActivityLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityLineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
