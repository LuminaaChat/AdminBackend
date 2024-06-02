import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTenantPanelComponent } from './edit-tenant-panel.component';

describe('EditDivisionPanelComponent', () => {
  let component: EditTenantPanelComponent;
  let fixture: ComponentFixture<EditTenantPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTenantPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTenantPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
