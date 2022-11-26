import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedLineItemComponent } from './assigned-line-item.component';

describe('AssignedLineItemComponent', () => {
  let component: AssignedLineItemComponent;
  let fixture: ComponentFixture<AssignedLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedLineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
