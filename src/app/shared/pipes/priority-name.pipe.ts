import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityName'
})
export class PriorityNamePipe implements PipeTransform {

  transform(value: string, ...arg: string[]): unknown {
    if (value.includes(arg[0])) {
      return arg[1] + value + arg[1];
    } else {
      return value;
    }
  }

}
