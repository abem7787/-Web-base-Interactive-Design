'use strict';

const PI2 = 2 * Math.PI
function map(s, a1, a2, b1, b2) {
  return (b1 + (s - a1) * (b2 - b1) / (a2 - a1));
}
