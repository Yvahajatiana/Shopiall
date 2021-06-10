import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsellFormComponent } from './upsell-form.component';

describe('UpsellFormComponent', () => {
  let component: UpsellFormComponent;
  let fixture: ComponentFixture<UpsellFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsellFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsellFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
