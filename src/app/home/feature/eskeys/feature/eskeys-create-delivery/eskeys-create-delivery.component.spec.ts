import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EskeysCreateDeliveryComponent } from './eskeys-create-delivery.component';

describe('EskeysCreateDeliveryComponent', () => {
  let component: EskeysCreateDeliveryComponent;
  let fixture: ComponentFixture<EskeysCreateDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EskeysCreateDeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EskeysCreateDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
