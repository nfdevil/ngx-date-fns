import { Pipe, PipeTransform } from '@angular/core';
import { addMonths } from 'date-fns';

@Pipe({ name: 'dfnsAddMonths' })
export class AddMonthsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddMonths: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (!date) {
      throw new Error(AddMonthsPipe.NO_ARGS_ERROR);
    }
    return addMonths(date, amount || 0);
  }
}
