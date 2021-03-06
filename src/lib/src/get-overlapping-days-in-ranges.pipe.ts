import { Pipe, PipeTransform } from '@angular/core';
import { getOverlappingDaysInIntervals } from 'date-fns';

@Pipe({ name: 'dfnsGetOverlappingDaysInRanges' })
export class GetOverlappingDaysInRangesPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR =
    'dfnsGetOverlappingDaysInRanges: missing required arguments';

  transform(
    initialRangeStartDate: string | number | Date,
    initialRangeEndDate: string | number | Date,
    comparedRangeStartDate: string | number | Date,
    comparedRangeEndDate: string | number | Date
  ): number {
    if (
      !initialRangeStartDate ||
      !initialRangeEndDate ||
      !comparedRangeStartDate ||
      !comparedRangeEndDate
    ) {
      throw new Error(GetOverlappingDaysInRangesPipe.NO_ARGS_ERROR);
    }
    return getOverlappingDaysInIntervals(
      { start: initialRangeStartDate, end: initialRangeEndDate },
      { start: comparedRangeStartDate, end: comparedRangeEndDate }
    );
  }
}
