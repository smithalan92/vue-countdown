import VueCountdown from './VueCountdown';

const install = (app) => {
  app.component(VueCountdown.name, VueCountdown);
};

VueCountdown.install = install;

export default VueCountdown;
