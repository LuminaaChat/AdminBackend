import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role',
  standalone: true
})
export class RolePipe implements PipeTransform {

  transform(value: string ): string {

    switch (value) {
      case 'USER':
        return 'Benutzer';
        break;
      case 'ADMIN':
        return 'Administrator';
        break;
      case 'EMPLOYEE':
        return 'Mitarbeiter';
        break;
      default:
        return 'Keine Rolle';
        break;
    }

  }

}
