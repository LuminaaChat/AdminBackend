import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTenantPanelComponent } from './new-tenant-panel.component';

describe('NewDivisionPanelComponent', () => {
  let component: NewTenantPanelComponent;
  let fixture: ComponentFixture<NewTenantPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTenantPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTenantPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
