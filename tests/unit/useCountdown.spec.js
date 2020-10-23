import { reactive, toRaw } from 'vue';
import intervalToDuration from 'date-fns/intervalToDuration';
import useCountDown from '../../src/useCountdown';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('useCountDown', () => {
  const context = {
    emit: jest.fn(),
  };

  it('returns the expected properties', () => {
    const props = reactive({
      endDateTime: new Date('2030-10-01 00:00'),
      startImmediately: false,
    });

    const {
      countdown,
      run,
      cancel,
      isRunning,
    } = useCountDown(props, context);

    expect(toRaw(countdown)).toEqual({
      remainingSeconds: { value: 0, text: '' },
      remainingMinutes: { value: 0, text: '' },
      remainingHours: { value: 0, text: '' },
      remainingDays: { value: 0, text: '' },
      remainingWeeks: { value: 0, text: '' },
      remainingMonths: { value: 0, text: '' },
      remainingYears: { value: 0, text: '' },
    });

    expect(isRunning.value).toBe(false);

    expect(typeof run).toBe('function');
    expect(typeof cancel).toBe('function');
  });

  it('should calculate the correct countdown time when run is called', () => {
    jest.spyOn(global, 'requestAnimationFrame').mockReturnValueOnce(123);

    const props = reactive({
      startDateTime: new Date('2020-10-29 11:00:04'),
      endDateTime: new Date('2020-10-30 12:15:06'),
      startImmediately: false,
    });

    const {
      countdown,
      run,
    } = useCountDown(props, context);

    expect(toRaw(countdown)).toEqual({
      remainingSeconds: { value: 0, text: '' },
      remainingMinutes: { value: 0, text: '' },
      remainingHours: { value: 0, text: '' },
      remainingDays: { value: 0, text: '' },
      remainingWeeks: { value: 0, text: '' },
      remainingMonths: { value: 0, text: '' },
      remainingYears: { value: 0, text: '' },
    });

    run();

    expect(toRaw(countdown)).toEqual({
      remainingSeconds: { value: 2, text: '2 seconds' },
      remainingMinutes: { value: 15, text: '15 minutes' },
      remainingHours: { value: 1, text: '1 hour' },
      remainingDays: { value: 1, text: '1 day' },
      remainingWeeks: { value: 0, text: '0 weeks' },
      remainingMonths: { value: 0, text: '0 months' },
      remainingYears: { value: 0, text: '0 years' },
    });
  });

  it('should emit a finished event if the startdate is after the end date', () => {
    const props = reactive({
      startDateTime: new Date('2030-10-01 00:01'),
      endDateTime: new Date('2030-10-01 00:00'),
      startImmediately: false,
    });

    const {
      run,
      isRunning,
    } = useCountDown(props, context);

    run();

    expect(context.emit).toHaveBeenCalledWith('finished');
    expect(isRunning.value).toBe(false);
  });

  it('should emit a tick event before the run function ends', () => {
    const props = reactive({
      endDateTime: new Date('2030-10-01 00:00'),
      startImmediately: false,
    });

    const {
      countdown,
      run,
    } = useCountDown(props, context);

    run();

    expect(context.emit).toHaveBeenCalledWith('tick', countdown);
  });

  it('should schedule another run execution after run is called', async () => {
    jest.spyOn(global, 'requestAnimationFrame').mockReturnValueOnce(123);

    const props = reactive({
      endDateTime: new Date('2030-10-01 00:00'),
      startImmediately: false,
    });

    const {
      run,
      isRunning,
    } = useCountDown(props, context);

    run();

    await delay(600);

    expect(isRunning.value).toBe(true);

    expect(global.requestAnimationFrame).toHaveBeenCalled();
  });

  it('should clear any timeouts and animation requests and set isRunning to false when cancel is called', () => {
    jest.spyOn(global, 'clearTimeout');
    jest.spyOn(global, 'cancelAnimationFrame');

    const props = reactive({
      endDateTime: new Date('2030-10-01 00:00'),
      startImmediately: false,
    });

    const {
      run,
      cancel,
      isRunning,
    } = useCountDown(props, context);

    run();

    expect(isRunning.value).toBe(true);

    cancel();

    expect(global.clearTimeout).toHaveBeenCalled();
    expect(global.cancelAnimationFrame).toHaveBeenCalled();
    expect(isRunning.value).toBe(false);
  });
});
