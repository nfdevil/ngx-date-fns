import 'core-js';
import 'reflect-metadata';
import { DifferenceInWeeksPipe } from './difference-in-weeks.pipe';

describe('DifferenceInWeeksPipe', () => {
  var pipe: DifferenceInWeeksPipe;

  beforeEach(() => pipe = new DifferenceInWeeksPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrow(new Error(DifferenceInWeeksPipe.NO_ARGS_ERROR));
  });

  it('should display the difference in weeks', () => {
    expect(pipe.transform(new Date(2014, 6, 20), new Date(2014, 6, 5)))
      .toBe(2);
  });
});
