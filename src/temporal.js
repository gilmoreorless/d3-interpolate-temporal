import {Temporal} from "proposal-temporal";

function valueOf(dt) {
  return dt.toAbsolute('UTC').getEpochMilliseconds();
}

export default function(a, b) {
  return a = valueOf(a), b = valueOf(b), function(t) {
    return Temporal.Absolute.fromEpochMilliseconds(a * (1 - t) + b * t).toDateTime('UTC');
  };
}
