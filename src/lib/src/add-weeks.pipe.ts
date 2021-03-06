import { Pipe, PipeTransform } from '@angular/core';
import { addWeeks } from 'date-fns';

@Pipe({ name: 'dfnsAddWeeks' })
export class AddWeeksPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsAddWeeks: missing required arguments';

  transform(date: Date | string | number, amount: number): Date {
    if (!date) {
      throw new Error(AddWeeksPipe.NO_ARGS_ERROR);
    }
    return addWeeks(date, amount || 0);
  }
}
