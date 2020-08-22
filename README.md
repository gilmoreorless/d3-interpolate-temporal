# d3-interpolate-temporal

A fork of [d3-interpolate](https://github.com/d3/d3-interpolate) to support the in-progress [Temporal proposal](https://github.com/tc39/proposal-temporal).

:warning: **This is purely an experiment to test out the viability of the Temporal API. DO NOT USE THIS IN PRODUCTION.** :warning:

This includes every method of the original `d3-interpolate` ([see documentation](https://github.com/d3/d3-interpolate)), plus a new method:

<a name="interpolateTemporal" href="#interpolateTemporal">#</a> d3.<b>interpolateTemporal</b>(<i>a</i>, <i>b</i>)

Returns an interpolator between the two [DateTimes](https://tc39.es/proposal-temporal/docs/datetime.html) *a* and *b*. Although `Temporal.DateTime` is abstract and contains no concept of a time zone, this function treats the instances as if they represent UTC.

Note: Unlike `d3.interpolateTime`, a new object is returned every time. This will be slower when used in animation, but Temporal objects are immutable.
