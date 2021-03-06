import { Pipe, PipeTransform } from '@angular/core';
import { getDate } from 'date-fns';

@Pipe({ name: 'dfnsGetDate' })
export class GetDatePipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsGetDate: missing required arguments';

  transform(date: string | number | Date): number {
    if (!date) {
      throw new Error(GetDatePipe.NO_ARGS_ERROR);
    }
    return getDate(date);
  }
}
