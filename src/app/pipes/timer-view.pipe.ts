import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerView'
})
export class TimerViewPipe implements PipeTransform {

  transform(value: number): string {
    return `${Math.floor(value/60)} minutes ${(value % 60 < 10)?'0'+(value%60):value%60} secondes`
  }

}
