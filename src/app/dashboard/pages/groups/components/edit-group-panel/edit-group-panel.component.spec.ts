import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroupPanelComponent } from './edit-group-panel.component';

describe('EditDivisionPanelComponent', () => {
  let component: EditGroupPanelComponent;
  let fixture: ComponentFixture<EditGroupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditGroupPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGroupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
