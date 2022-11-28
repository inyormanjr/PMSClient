import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelLineItemComponent } from './label-line-item.component';

describe('LabelLineItemComponent', () => {
  let component: LabelLineItemComponent;
  let fixture: ComponentFixture<LabelLineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelLineItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
