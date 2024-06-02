import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupPanelComponent } from './new-group-panel.component';

describe('NewDivisionPanelComponent', () => {
  let component: NewGroupPanelComponent;
  let fixture: ComponentFixture<NewGroupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewGroupPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGroupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
