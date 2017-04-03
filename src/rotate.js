function swap(array, a, b) {
  var t = array[a];
  array[a] = array[b];
  array[b] = t;
}

function reverse(array, f, l) {
  while (f !== l && f !== --l) swap(array, f++, l);
}

function reverseUntil(array, f, m, l) {
  while (f !== m && m !== l) swap(array, f++, --l);
  return [f, l];
}

export default function(array, f, m, l) {
  var p;

  if (arguments.length === 2) {
    l = array.length;
    f = f % l; // Where f = k, the number of rotation steps.
    m = l - f;
    f = 0;
  }

  reverse(array, f, m);
  reverse(array, m, l);
  p = reverseUntil(array, f, m, l);
  reverse(array, p[0], p[1]);

  if (m === p[0]) return p[1];

  return p[0];
}
