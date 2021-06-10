import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsellMainComponent } from './upsell-main.component';

describe('UpsellMainComponent', () => {
  let component: UpsellMainComponent;
  let fixture: ComponentFixture<UpsellMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsellMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsellMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
