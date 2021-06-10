import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsellListComponent } from './upsell-list.component';

describe('UpsellListComponent', () => {
  let component: UpsellListComponent;
  let fixture: ComponentFixture<UpsellListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsellListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
