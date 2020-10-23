import util from '../../src/util';

describe('util', () => {
  describe('getHasCountdownFinished', () => {
    it('should return false if the sum of all values is > 0', () => {
      const data = {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 1,
        minutes: 0,
        seconds: 0,
      };

      const result = util.getHasCountdownFinished(data);

      expect(result).toBe(false);
    });

    it('should return true if the sum of all values is 0', () => {
      const data = {
        years: 0,
        months: 0,
        weeks: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };

      const result = util.getHasCountdownFinished(data);

      expect(result).toBe(true);
    });
  });

  describe('getFormatString', () => {
    it('should return the correct string postfixed with s for the type if value isnt 1', () => {
      expect(util.getFormatString(23, 'week')).toBe('23 weeks');
      expect(util.getFormatString(0, 'week')).toBe('0 weeks');
      expect(util.getFormatString(6251, 'week')).toBe('6251 weeks');
    });

    it('should return the correct string if the value is 1', () => {
      expect(util.getFormatString(1, 'week')).toBe('1 week');
    });
  });

  describe('capitaliseFirstletter', () => {
    it('should return the word with first letter capatilised', () => {
      expect(util.capitaliseFirstletter('alan')).toBe('Alan');
    });
  });
});
