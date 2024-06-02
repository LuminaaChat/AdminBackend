import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visible',
  standalone: true
})
export class VisiblePipe implements PipeTransform {

  transform(value: boolean): string {
    if (value) {
      return 'sichtbar';
    } else {
      return 'unsichtbar';
    }
  }

}
