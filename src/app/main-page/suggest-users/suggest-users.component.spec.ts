import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestUsersComponent } from './suggest-users.component';

describe('SuggestUsersComponent', () => {
  let component: SuggestUsersComponent;
  let fixture: ComponentFixture<SuggestUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
