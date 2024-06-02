import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListViewItemComponent } from './user-list-view-item.component';

describe('UserListViewItemComponent', () => {
  let component: UserListViewItemComponent;
  let fixture: ComponentFixture<UserListViewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListViewItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
