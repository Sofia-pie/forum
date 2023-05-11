import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsMainComponent } from './topics-main.component';

describe('TopicsMainComponent', () => {
  let component: TopicsMainComponent;
  let fixture: ComponentFixture<TopicsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicsMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
