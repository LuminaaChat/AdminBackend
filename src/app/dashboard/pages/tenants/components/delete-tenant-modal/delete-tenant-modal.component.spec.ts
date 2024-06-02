import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTenantModalComponent } from './delete-tenant-modal.component';

describe('DeleteDivisionModalComponent', () => {
  let component: DeleteTenantModalComponent;
  let fixture: ComponentFixture<DeleteTenantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTenantModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTenantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
