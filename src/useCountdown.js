/* eslint-disable no-return-assign */

import { reactive, ref } from 'vue';
import intervalToDuration from 'date-fns/intervalToDuration';
import util from './util';

export default function (props, context) {
  const countdown = reactive({
    remainingSeconds: { value: 0, text: '' },
    remainingMinutes: { value: 0, text: '' },
    remainingHours: { value: 0, text: '' },
    remainingDays: { value: 0, text: '' },
    remainingWeeks: { value: 0, text: '' },
    remainingMonths: { value: 0, text: '' },
    remainingYears: { value: 0, text: '' },
  });

  const isRunning = ref(false);

  let animationFrame = null;
  let animationTimeout = null;

  const run = async () => {
    isRunning.value = true;

    const startDateTime = props.startDateTime ? props.startDateTime : new Date();

    if (startDateTime >= props.endDateTime) {
      context.emit('finished');
      isRunning.value = false;
      return;
    }

    const result = intervalToDuration({ start: startDateTime, end: props.endDateTime });

    // date-fns doesn't calculate weeks for us.
    // we can calculate it ourselves though
    result.weeks = Math.floor(result.days / 7);

    // Since we've calculated the weeks, we need to adjust
    // the day count
    result.days %= 7;

    Object.keys(result).forEach((key) => {
      const keyName = `remaining${util.capitaliseFirstletter(key)}`;
      const value = result[key];
      const text = util.getFormatString(value, key.substring(0, key.length - 1));
      countdown[keyName].value = value;
      countdown[keyName].text = text;
    });

    // Catchall to prevent a race condition where the countdown
    // calculation happens just when the count finishes.
    if (util.getHasCountdownFinished(countdown)) {
      context.emit('finished');
      isRunning.value = false;
      return;
    }

    context.emit('tick', countdown);

    animationTimeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(run);
    }, props.tickDelay);
  };

  const cancel = () => {
    clearTimeout(animationTimeout);
    cancelAnimationFrame(animationFrame);
    isRunning.value = false;
  };

  return {
    countdown,
    run,
    cancel,
    isRunning,
  };
}
