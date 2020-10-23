/* eslint-disable no-return-assign */

function getHasCountdownFinished(data) {
  // eslint-disable-next-line no-param-reassign
  const sum = Object.values(data).reduce((acc, current) => acc += current, 0);

  return sum === 0;
}

function getFormatString(value, type) {
  const prefix = `${type}${value === 1 ? '' : 's'}`;
  return `${value} ${prefix}`;
}

function capitaliseFirstletter(word) {
  return `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`;
}

export default {
  getHasCountdownFinished,
  getFormatString,
  capitaliseFirstletter,
};
