import { Pipe, PipeTransform } from '@angular/core';
import { subQuarters } from 'date-fns';

@Pipe({ name: 'dfnsSubQuarters' })
export class SubQuartersPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsSubQuarters: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (!date) {
      throw new Error(SubQuartersPipe.NO_ARGS_ERROR);
    }
    return subQuarters(date, amount || 0);
  }
}
