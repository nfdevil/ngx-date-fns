import { NgModule } from '@angular/core';

import { DistanceInWordsPipe } from './distance-in-words.pipe';
import { DistanceInWordsStrictPipe } from './distance-in-words-strict.pipe';
import { DistanceInWordsToNowPipe } from './distance-in-words-to-now.pipe';
import { FormatPipe } from './format.pipe';
import { GetOverlappingDaysInRangesPipe } from './get-overlapping-days-in-ranges.pipe';
import { GetMillisecondsPipe } from './get-milliseconds.pipe';
import { GetSecondsPipe } from './get-seconds.pipe';
import { GetMinutesPipe } from './get-minutes.pipe';
import { GetHoursPipe } from './get-hours.pipe';
import { GetDatePipe } from './get-date.pipe';
import { GetDayOfYearPipe } from './get-day-of-year.pipe';
import { GetDayPipe } from './get-day.pipe';
import { GetISODayPipe } from './get-iso-day.pipe';
import { GetDaysInMonthPipe } from './get-days-in-month.pipe';
import { GetMonthPipe } from './get-month.pipe';
import { GetDaysInYearPipe } from './get-days-in-year.pipe';
import { GetYearPipe } from './get-year.pipe';
import { GetISOWeeksInYearPipe } from './get-iso-weeks-in-year.pipe';
import { GetISOWeekPipe } from './get-iso-week.pipe';
import { MinPipe } from './min.pipe';
import { MaxPipe } from './max.pipe';
import { GetTimePipe } from './get-time.pipe';
import { ClosestToPipe } from './closest-to.pipe';
import { DifferenceInMillisecondsPipe } from './difference-in-milliseconds.pipe';
import { DifferenceInSecondsPipe } from './difference-in-seconds.pipe';
import { DifferenceInMinutesPipe } from './difference-in-minutes.pipe';
import { DifferenceInHoursPipe } from './difference-in-hours.pipe';
import { DifferenceInCalendarDaysPipe } from './difference-in-calendar-days.pipe';
import { DifferenceInDaysPipe } from './difference-in-days.pipe';
import { DifferenceInCalendarWeeksPipe } from './difference-in-calendar-weeks.pipe';
import { DifferenceInWeeksPipe } from './difference-in-weeks.pipe';
import { DifferenceInCalendarISOWeeksPipe } from './difference-in-calendar-iso-weeks.pipe';
import { DifferenceInCalendarMonthsPipe } from './difference-in-calendar-months.pipe';

const PIPES = [
  DistanceInWordsPipe,
  DistanceInWordsStrictPipe,
  DistanceInWordsToNowPipe,
  FormatPipe,
  GetOverlappingDaysInRangesPipe,
  GetMillisecondsPipe,
  GetSecondsPipe,
  GetMinutesPipe,
  GetHoursPipe,
  GetDatePipe,
  GetDayOfYearPipe,
  GetDayPipe,
  GetISODayPipe,
  GetDaysInMonthPipe,
  GetMonthPipe,
  GetDaysInYearPipe,
  GetYearPipe,
  GetISOWeeksInYearPipe,
  GetISOWeekPipe,
  MinPipe,
  MaxPipe,
  GetTimePipe,
  ClosestToPipe,
  DifferenceInMillisecondsPipe,
  DifferenceInSecondsPipe,
  DifferenceInMinutesPipe,
  DifferenceInHoursPipe,
  DifferenceInCalendarDaysPipe,
  DifferenceInDaysPipe,
  DifferenceInCalendarWeeksPipe,
  DifferenceInWeeksPipe,
  DifferenceInCalendarISOWeeksPipe,
  DifferenceInCalendarMonthsPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class DateFnsModule { }
