import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function getTimeIntervals24hr() {
  var times = ['00:00'];

  for (var i = 1; i < 24; i++) {
    times.push("".concat(i, ":00"));
  }

  times.push('23:59');
  return times.map(function (time) {
    return {
      value: time,
      content: time
    };
  });
}

var defaultTimeIntervals = getTimeIntervals24hr();
export var createLocalizationProvider = function createLocalizationProvider(locale) {
  var dayFormatter = Intl.DateTimeFormat(locale, {
    weekday: 'short'
  });
  var monthFormatter = Intl.DateTimeFormat(locale, {
    month: 'long'
  });
  var monthsLong = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (month) {
    return monthFormatter.format(new Date(0, month, 1));
  });
  var daysShort = [1, 2, 3, 4, 5, 6, 7].map(function (day) {
    return dayFormatter.format(new Date(0, 9, day, 12));
  });
  var timeFormatter = Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric'
  });
  return {
    code: locale,
    localize: {
      month: function month(n) {
        return monthsLong[n];
      },
      day: function day(n) {
        return daysShort[n];
      }
    },
    monthsLong: monthsLong,
    // Required by datepicker.
    formatLong: {},
    formatTime: timeFormatter.format
  };
};
export function getTimeIntervals(localization) {
  var localizedTimeIntervals = defaultTimeIntervals.map(function (time) {
    var baseDate = new Date();

    var _time$value$split = time.value.split(':'),
        _time$value$split2 = _slicedToArray(_time$value$split, 2),
        hour = _time$value$split2[0],
        minute = _time$value$split2[1];

    baseDate.setHours(parseInt(hour, 10));
    baseDate.setMinutes(parseInt(minute, 0));
    return {
      content: localization.formatTime(baseDate),
      value: time.value
    };
  });
  return localizedTimeIntervals;
}