import {Component, EventEmitter, Input, Output, signal, WritableSignal} from '@angular/core';
import {JsonPipe, NgClass, NgIf} from "@angular/common";
import {FormsModule, NgModel} from "@angular/forms";
import {Group} from "../../../../../shared/types/group.type";
import {TenantsApiService} from "../../../../../shared/api/tenants-api.service";
import {Tenant} from "../../../../../shared/types/tenant.type";

@Component({
  selector: 'app-new-group-panel',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgClass,
    JsonPipe
  ],
  templateUrl: './new-group-panel.component.html',
  styleUrl: './new-group-panel.component.css'
})
export class NewGroupPanelComponent {
  @Input() showNewGroupPanel: boolean = false;
  @Input() error: WritableSignal<string | null> = signal<string | null>(null);
  @Output() closeNewGroupPanelEvent: EventEmitter<Group | null> = new EventEmitter<Group | null>()


  divisionError: WritableSignal<string | null> = signal<string | null>(null);
  nameError: WritableSignal<string | null> = signal<string | null>(null);
  descriptionError: WritableSignal<string | null> = signal<string | null>(null);

  divisions: WritableSignal<Tenant[]> = signal<Tenant[]>([]);

  newGroup: Group = {} as Group;
  constructor(private divisionsService: TenantsApiService) {
    this.loadDivisions();
  }

  loadDivisions() {
    this.divisionsService.getList().subscribe(
      {
        next: (divisions: Tenant[]) => {
          this.divisions.set(divisions);
        },
        error: (error: any) => {
          this.error.set(error);
        }
      }
    );
  }

  onClickClose() {
    this.showNewGroupPanel = false;
    this.closeNewGroupPanelEvent.emit(null);
    this.newGroup = {} as Group;
  }

  calculateErrors() {
    this.divisionError.set(null);
    this.nameError.set(null);
    this.descriptionError.set(null);

    if (!this.newGroup.division) {
      this.divisionError.set('Bitte wähle ein Bereich aus.')
    }
    if (!this.newGroup.name) {
      this.nameError.set('Bitte gib einen Namen ein.')
    }
    if (!this.newGroup.description) {
      this.descriptionError.set('Bitte gib eine Beschreibung ein.')
    }
  }

  hasNoErrors(): boolean {
    return !(this.divisionError() || this.nameError() || this.descriptionError());
  }

  onClickSave() {
    this.calculateErrors();
    if (this.hasNoErrors()) {
      this.showNewGroupPanel = false;
      this.closeNewGroupPanelEvent.emit(this.newGroup);
      this.newGroup = {} as Group;
    }

  }
}
