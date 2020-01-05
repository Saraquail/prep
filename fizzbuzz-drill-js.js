https://repl.it/@sararmills/fizzbuzz-drill-js




  function fizzBuzz(countTo) {
    const array = [];
    for (i = 1; i <= countTo; i++) {
      let remainder3 = i % 3;
      let remainder5 = i % 5;
      if (remainder3 === 0 && remainder5 !== 0) {
        array.push("fizz");
      }
      if (remainder5 === 0 && remainder3 !== 0) {
        array.push("buzz");
      }
      if (remainder3 === 0 && remainder5 === 0 ) {
        array.push("fizzbuzz");
      }
      if (remainder3 !== 0 && remainder5 !== 0 ) {
        array.push(i);
      }
    }
    return array;
  }
  /* From here down, you are not expected to 
     understand.... for now :)  
  
  
   
     
     Nothing to see here!
     
  */

  // tests
  (function testFizzBuzz() {
    // we'll use the variables in our test cases
    const countTo = 16;
    const expected = [
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz',
      16,
    ];

    const actual = fizzBuzz(countTo) || [];

    if (
      expected.length === actual.length &&
      expected.every(function (item, index) {
        return actual[index] === item;
      })
    ) {
      console.log('SUCCESS: fizzBuzz is working');
    } else {
      console.log('FAILURE: fizzBuzz is not working');
    }
  })();
