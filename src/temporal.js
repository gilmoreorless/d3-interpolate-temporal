import {Temporal} from "proposal-temporal";

function valueOf(dt) {
  return dt.toInstant('UTC').getEpochMilliseconds();
}

export default function(a, b) {
  return a = valueOf(a), b = valueOf(b), function(t) {
    return Temporal.Instant.fromEpochMilliseconds(a * (1 - t) + b * t).toDateTime('UTC');
  };
}
