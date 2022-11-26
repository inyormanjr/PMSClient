import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAssignedComponent } from './recent-assigned.component';

describe('RecentAssignedComponent', () => {
  let component: RecentAssignedComponent;
  let fixture: ComponentFixture<RecentAssignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentAssignedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentAssignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
