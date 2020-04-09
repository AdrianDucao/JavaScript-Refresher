/*
        JS Resfresher
    */
   console.log("Hellow World!"); //printing hello world in console

   /*
       Data Types
       undefined, null, boolean, string, symbol, number, and object
   */
   var name = "Ian"; //var can be used through whole program

   num = 123;

   let ourName = "motherfuckers"; //within the

   const pi = 3.1415; //constant value that never change

   /*
       Storing Values with Assignment Operator
   */
   var a; //declaring variable
   var b = 69; //assigning variable

   a = 7; //assigning value

   b = a; //passing value

   console.log(a);

   /*
       Initializing Variables w/ Assignment Operator
   */
   var a = 9;

   /*
       Uninitialized Variables
   */
   var a = 5;
   var b = 10;
   var c = "fuck";
   console.log("Initialized:", a,b,c)

   a = a+5;
   b = b+5;
   c = c+" you!";
   console.log("Uninitialized:", a,b,c)

   /*
       case sensitivity in variables
   */
    
    //declaring
    var firstName;
    var lastName;

    //assignment
    firstname = "putin";
    LASTNAME = "fat";

    //output
    console.log("Case Sensitivity in Variable Expected Error: ", firstName, lastName); //expect to see undefined error
    
    /*
        Operators
    */
    var sum = 1+1;
    console.log(sum);

    var difference = 1-1;
    console.log("Difference: ", difference);

    var product = 1*1;
    console.log("Product: ",product);

    var quotient = 1/1;
    console.log("Quotient: ",quotient);
    
    var remainder = 1%1;
    console.log("Remeainder: ",remainder);

    /*
        incrementing numbers
    */
    var number = 69;

    number = number+1; //shitty way

    number++; //beautiful way
    number--; 

    /*
        decimal value
    */
    var decimal = 6.9;
    var myDecimal = 0.0001;

    /*
        bracket notation
    */
    var find;
    var name = "Adrian";

    find = name[0];

    console.log("Bracket Notation: ",find);
    
    /*
        Finding last character in string
    */

    //sample
    var name = "Adrian";
    var lastLetter = name[name.length - 1];
    console.log("last letter in string: ",lastLetter);

    /*
        Word Blanks
    */

    function wordBlanks(noun, adjective, verb, adverb){
        var result = "";
        result += "The " + adjective + " " + noun + " " + verb + " to the store."

        return result;
    }

    console.log(wordBlanks("dog", "big", "ran", "quickly"));

    /*
        Storing value in Array
    */

    //sample
    var myArray = ["Adrian", 21];

    //more sample
    var ourArray = ["damn", "son", "!"];

    /*
        nested Array
    */

    var ourArray = [["array1", 1], ["array2","2"]];