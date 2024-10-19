import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitChars',
  standalone: true
})
export class LimitCharsPipe implements PipeTransform {

  transform(value: unknown, maxChars: number = 100): unknown {
    if (typeof value === 'string') {
      return value.length > maxChars ? value.substring(0, maxChars) + '...' : value;
    }
    return value; 
  }

}
