import { Pipe, PipeTransform } from '@angular/core';
import {Tenant} from "../types/tenant.type";

@Pipe({
  name: 'division',
  standalone: true
})
export class DivisionPipe implements PipeTransform {

  transform(value: Tenant | string, property: keyof Tenant): string | undefined {
    if (typeof value === 'string') {
      return value;
    } else if (value && property in value) {
      const propValue = value[property];
      return typeof propValue === 'string' ? propValue : undefined;
    } else {
      return undefined;
    }
  }

}
