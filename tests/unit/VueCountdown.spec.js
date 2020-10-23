import { h } from 'vue';
import { mount } from '@vue/test-utils';
import VueCountdown from '../../src/VueCountdown';

describe('VueCountdown', () => {
  it('should expose the countdown data and run, cancel on the vm', () => {
    const wrapper = mount(VueCountdown, {
      props: {
        endDateTime: new Date('2020-11-01'),
        startImmediately: false,
      },
    });

    expect(wrapper.vm.countdown).toBeTruthy();
    expect(wrapper.vm.run).toBeTruthy();
    expect(wrapper.vm.cancel).toBeTruthy();
  });

  it('should render an empty div if no slot is given', () => {
    const wrapper = mount(VueCountdown, {
      props: {
        endDateTime: new Date('2020-11-01'),
        startImmediately: false,
      },
    });

    expect(wrapper.attributes('id')).toBe('vue-countdown');

    expect(wrapper.html()).toContain('<div id="vue-countdown"></div>');
  });

  it('should render the default slot if given', () => {
    const wrapper = mount(VueCountdown, {
      props: {
        endDateTime: new Date('2020-11-01'),
        startImmediately: false,
      },
      slots: {
        default: h('div', { id: 'my-slot' }),
      },
    });

    expect(wrapper.html()).toContain('<div id="vue-countdown"><div id="my-slot"></div></div>');
  });
});
