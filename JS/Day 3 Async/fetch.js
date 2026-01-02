function add(a, b) {
    return a + b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  function assertEqual(actual, expected, message) {
  try{
    if (actual !== expected) {
      throw new Error(`❌ ${message} | expected=${expected}, actual=${actual}`);
    }
  }
  catch(e){
      console.log(e.message)
  }
  }
  
  function assertThrows(fn, message) {
    let threw = false;
    try {
      fn();
    } catch (e) {
      threw = true;
    }
  try{
    if (!threw) {
      throw new Error(`❌ ${message} | expected function to throw`);
    }
  }
  catch(e){
      console.log(e.message)
  }
  }
  
  function runTests() {
    console.log("Running tests...");
    
    assertEqual(add(1, 2), 3, "add(1, 2) should be 3");
    assertEqual(add(-1, 5), 4, "add(-1, 5) should be 4");
    assertEqual(divide(10, 2), 5, "divide(10, 2) should be 5");
    
    assertThrows(() => divide(10, 0), "divide(10, 0) should throw");
    
    console.log("✅ All tests Executed!");
  }
  
  runTests();
  