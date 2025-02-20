import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserPanelComponent } from './new-user-panel.component';

describe('NewDivisionPanelComponent', () => {
  let component: NewUserPanelComponent;
  let fixture: ComponentFixture<NewUserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewUserPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
