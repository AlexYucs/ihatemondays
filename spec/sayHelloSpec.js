var sayHello = require("../src/sayHello.js");

describe("Greet", function (){
  //hello name
  it("concats Hello and a name", function(){
    var sayHello1  = new sayHello();
    var actual = sayHello1.greet("World");
    var expected = "Hello, World";
    expect(actual).toEqual(expected);
  });

  //hello day time
  it("time of day hello", function(){
    var sayHello1   = new sayHello();
    var actual = sayHello1.greet("Good morning");
    var expected = "Good morning";
    expect(actual).toEqual(expected);

    var actual = sayHello1.greet("Good afternoon");
    var expected = "Good afternoon";
    expect(actual).toEqual(expected);

    var actual = sayHello1.greet("Good evening");
    var expected = "Good evening";
    expect(actual).toEqual(expected);
  });

  //hello empty
  it("Login prompt for empty", function(){
    var sayHello2 =  new sayHello();
    var actual = sayHello2.greet("");
    var expected = "Please Login";
    expect(actual).toEqual(expected);
  });


    //hello German
    it("replies Hallo to Hallo", function(){
      var sayHello3 =   new sayHello();
      var actual = sayHello3.greet("Hallo");
      var expected = "Hallo";
      expect(actual).toEqual(expected);
    });

    //hello x4
    it("4x hello", function(){
      var sayHello4 = new sayHello();
      sayHello4.greet("Hallo");
      sayHello4.greet("Hallo");
      sayHello4.greet("Hallo");
      sayHello4.greet("Hallo");
      var actual = sayHello4.greet("Hallo");
      var expected = "";
      expect(actual).toEqual(expected);
    });
});
