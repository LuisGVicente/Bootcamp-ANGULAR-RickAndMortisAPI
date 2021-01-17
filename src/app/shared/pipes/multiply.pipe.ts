import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // es el nombre del pipe, en el HTML veríamos {{2 | multiply: 4}}
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {
// Es la función que ejecuta el filtro. Value es el número a la izquierda de la tubería
// arg es el valor que le demos a la derecha
  transform(value: number, arg: number): number {
    return value * arg;
  
  }

}
