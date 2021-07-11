import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommentMainComponent } from './comment-main.component';

describe('CommentMainComponent', () => {
  let component: CommentMainComponent;
  let fixture: ComponentFixture<CommentMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
