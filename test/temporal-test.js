var tape = require("tape"),
    interpolate = require("../");

const { Temporal } = require("proposal-temporal");

function dateTime(year, month, day, hour, minute) {
  if (hour == null) hour = 0;
  if (minute == null) minute = 0;
  return new Temporal.DateTime(year, month, day, hour, minute);
}

function dateTimeMs(millis) {
  return Temporal.Absolute.fromEpochMilliseconds(millis).toDateTime('UTC');
}

tape("interpolateTemporal(a, b) interpolates between two DateTimes a and b", function(test) {
  var i = interpolate.interpolateTemporal(dateTime(2000, 1, 1), dateTime(2000, 1, 2));
  test.equal(i(0.0) instanceof Temporal.DateTime, true);
  test.equal(i(0.5) instanceof Temporal.DateTime, true);
  test.equal(i(1.0) instanceof Temporal.DateTime, true);
  test.deepEqual(i(0.2), dateTime(2000, 1, 1, 4, 48));
  test.deepEqual(i(0.4), dateTime(2000, 1, 1, 9, 36));
  test.end();
});

tape("interpolateTemporal(a, b) gives exact ends for t=0 and t=1", function(test) {
  var a = dateTimeMs(1e8 * 24 * 60 * 60 * 1000), b = dateTimeMs(-1e8 * 24 * 60 * 60 * 1000 +1);
  test.deepEqual(interpolate.interpolateTemporal(a, b)(1), b);
  test.deepEqual(interpolate.interpolateTemporal(a, b)(0), a);
  test.end();
});
