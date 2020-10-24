import { reactive, toRaw } from 'vue';
import useCountDown from '../../src/useCountdown';

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

  it('should emit a "start" event the first time run is executed', () => {
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

    expect(context.emit).toHaveBeenCalledWith('start');
    expect(isRunning.value).toBe(false);
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
    jest.spyOn(global, 'setTimeout');

    const props = reactive({
      endDateTime: new Date('2030-10-01 00:00'),
      startImmediately: false,
    });

    const {
      run,
      isRunning,
    } = useCountDown(props, context);

    run();

    expect(isRunning.value).toBe(true);

    expect(global.setTimeout).toHaveBeenCalled();
  });

  it('should clear any timeout, isRunning to false and emit cancelled when cancel is called', () => {
    jest.spyOn(global, 'clearTimeout');

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
    expect(isRunning.value).toBe(false);
    expect(context.emit).toHaveBeenCalledWith('cancelled');
  });
});
