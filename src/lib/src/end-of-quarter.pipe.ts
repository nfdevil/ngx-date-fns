import { Pipe, PipeTransform } from '@angular/core';
import { endOfQuarter } from 'date-fns';

@Pipe({ name: 'dfnsEndOfQuarter' })
export class EndOfQuarterPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsEndOfQuarter: missing required arguments';

  transform(date: string | number | Date): Date {
    if (!date) {
      throw new Error(EndOfQuarterPipe.NO_ARGS_ERROR);
    }
    return endOfQuarter(date);
  }
}
