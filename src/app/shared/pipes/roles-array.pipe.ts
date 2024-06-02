import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rolesArray',
  standalone: true
})
export class RolesArrayPipe implements PipeTransform {
  transform(value: string []): string {

    let result: string = '';

    value.forEach((role, index) => {
      result += this.getRole(role);
      if (index < value.length - 1) {
        result += ', ';
      }
    });

    return result;
  }

  getRole(role: string): string {
    switch (role) {
      case 'CLIENT':
        return 'Klient';
      case 'ADMIN':
        return 'Administrator';
      case 'EMPLOYEE':
        return 'Mitarbeiter';
      case 'LEGALGUARDIAN':
        return 'Sorgeberechtigter';
      default:
        return 'Keine Rolle';
    }
  }
}
