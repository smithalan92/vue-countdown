import { h, watch } from 'vue';
import useCountdown from './useCountdown';

export default {
  name: 'VueCountdown',

  props: {
    startDateTime: {
      type: Date,
      required: false,
      default: null,
    },

    endDateTime: {
      type: Date,
      required: true,
    },

    startImmediately: {
      type: Boolean,
      required: false,
      default: true,
    },

    tickDelay: {
      type: Number,
      required: false,
      default: 1000,
    },
  },

  setup(props, context) {
    const {
      countdown,
      run,
      cancel,
      isRunning,
    } = useCountdown(props, context);

    // If props change, and the countdown is running
    // Cancel the current run and restart it to avoid issues
    watch(props, () => {
      if (isRunning.value || props.startImmediately) {
        cancel();
        run();
      }
    });

    if (props.startImmediately) {
      run();
    }

    return {
      countdown,
      run,
      cancel,
    };
  },

  render() {
    // If a default slot is provided, we'll render it and pass it props to use
    // If theres no slot provided, we'll just render an empty div
    const children = this.$slots.default ? this.$slots.default({
      countdown: this.countdown,
    }) : [];

    return h('div', {
      id: 'vue-countdown',
    }, children);
  },
};
