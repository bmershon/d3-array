var tape = require("tape"),
    arrays = require("../");

tape("rotate(array, k) rotates elements k steps to the right", function(test) {
  var input = [0, 1, 2, 3, 4, 5];

  var input1 = input.slice(0);
  var m1 = arrays.rotate(input1, 0);
  test.deepEqual(input1, input);
  test.equal(m1, 0);

  var input2 = input.slice(0);
  var m2 = arrays.rotate(input2, 2);   
  test.deepEqual(input2, [4, 5, 0, 1, 2, 3]);
  test.equal(m2, 2);

  var input3 = input.slice(0);
  var m3 = arrays.rotate(input3, 17);   
  test.deepEqual(input3, [1, 2, 3, 4, 5, 0]);
  test.equal(m3, 5);

  var input4 = input.slice(0);
  var m4 = arrays.rotate(input4, 18);   
  test.deepEqual(input4, input);
  test.equal(m4, 0);

  test.end();
});


tape("rotate(array, f, m, l) interchanges ranges [f, m) and [m, l)", function(test) {
  var input = [0, 1, 2, 3, 4, 5, 6];

  var input1 = input.slice(0);
  var m1 = arrays.rotate(input1, 0, 2, 7);
  test.deepEqual(input1, [ 2, 3, 4, 5, 6, 0, 1]);
  test.equal(m1, 5);

  var input2 = input.slice(0);
  var m2 = arrays.rotate(input2, 2, 4, 6);
  test.deepEqual(input2, [0, 1, 4, 5, 2, 3, 6]);
  test.equal(m2, 4);

  var input3 = input.slice(0);
  var m3 = arrays.rotate(input3, 0, 4, 6);
  test.deepEqual(input3, [4, 5, 0, 1, 2, 3, 6]);
  test.equal(m3, 2);

  test.end();
});
