import {color} from "d3-color";
import {Temporal} from "proposal-temporal";
import rgb from "./rgb.js";
import {genericArray} from "./array.js";
import date from "./date.js";
import temporal from "./temporal.js";
import number from "./number.js";
import object from "./object.js";
import string from "./string.js";
import constant from "./constant.js";
import numberArray, {isNumberArray} from "./numberArray.js";

export default function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant(b)
      : (t === "number" ? number
      : t === "string" ? ((c = color(b)) ? (b = c, rgb) : string)
      : b instanceof color ? rgb
      : b instanceof Date ? date
      : b instanceof Temporal.DateTime ? temporal
      : isNumberArray(b) ? numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : number)(a, b);
}
