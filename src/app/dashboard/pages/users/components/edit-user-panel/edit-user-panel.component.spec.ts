import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserPanelComponent } from './edit-user-panel.component';

describe('EditDivisionPanelComponent', () => {
  let component: EditUserPanelComponent;
  let fixture: ComponentFixture<EditUserPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
