import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentImportComponent } from './comment-import.component';

describe('CommentImportComponent', () => {
  let component: CommentImportComponent;
  let fixture: ComponentFixture<CommentImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
