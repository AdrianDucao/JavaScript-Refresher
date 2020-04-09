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

    /*
        access array data with index
    */

    var array = [1,2,3];
    var checkData = array[1];

    console.log("Access array with index", checkData);

    /*
        modify array with index
    */

    var myArray = [1,2,3];
    console.log("Original Array: ",myArray);
    myArray[0] = 69;

    console.log("modified array ",myArray);

    /*
        multi dimensonal arrays with indexes
    */

    var tooManyArray = [[1,2],[3,4],[[8,9]]];
    console.log("original multiple arrays ",tooManyArray);
    var getData = tooManyArray[2][0];

    console.log("accessing multiple arrays: ",getData);

    /*
        manipulate arrays with push()
    */
    var sampleArray = ["Donald","Trump"];
    console.log("Orignal sample:", sampleArray);
    
    sampleArray.push("incompetent","president");
    console.log("push(): ",sampleArray);

    /*
        removing value in array with pop()
    */
    var sampleArray = ["corona","virus"];
    console.log("before pop(): ",sampleArray);

    var removeArray = sampleArray.pop();
    console.log("with pop(): ",removeArray);
    console.log("after pop(): ", sampleArray);

    /*
        manipulating array with shift()
    */
    var sampleArray = ["china","virus",["pandemic", "death"]];
    console.log("before shift(): ",sampleArray);

    var removeArray = sampleArray.shift();
    console.log("after shift(): ",sampleArray);

    /*
        unshift()
    */
    var sampleArray = ["China", "virus", "pandemic"];
    console.log("original array: ",sampleArray);
    
    sampleArray.shift();
    console.log("after shift(): ",sampleArray);

    sampleArray.unshift("Corona");
    console.log("after unshift() ",sampleArray);

    /*
        uses of nested array
    */
    //[item, quantity]
    var shoppingList = [["canned goods",5],["cereal",10],["soda",5]];

    /*
        resuable code with funtion
    */
    function myFunction(){
        console.log("Enhance Community Quarantine");
    }

    //calling the function
    myFunction();

    /*
        passing values to function with arguement
    */
    function myFunction(a,b){
        console.log("Product: ",a*b);
    }

    myFunction(69,69);

    /*
        Global scope and function
    */
    var globalVar = 69;

    function sample1(){

    }

    function sample2(){
        var output = "";

        if(typeof globalVar != "undefined"){
            output += "globalVar: "+globalVar;
        }

        console.log(output);
    }

    sample2();

    /*
        local scope and function
    */
    function myFunction1(){
        var localVar = 69;
        console.log("localVar: ",localVar);
    }

    myFunction1();

    //console.log(localVar); //there would be an error

    /*
        Returning value with return
    */
    function smush(a,b){
        return a+b;
    }

    console.log("return: ", smush(69,69));

    /*
        nextInLine
    */
    function nextInLine(arr, item){
        arr.push(item);
    
        return arr.shift(item);
    }

    var testList = [1,2,3,4,5];

    console.log("Before: "+JSON.stringify(testList));
    console.log(nextInLine(testList, 6));
    console.log("After: "+JSON.stringify(testList));

    /*
        Conditional Statements
    */
    //basic sample
    function trueOrFalse(arg){
        if(arg){
            return "It's True";
        }else{
            return "It's False";
        }
    }

    console.log(trueOrFalse(false));

    /*
        Switch Statements
    */
    function switcher(val){
        var output = "";

        switch (val){
            case "a":
                output = "atdog";
                break;
            case "b":
                output = "boobs";
                break;
            default:
                output = "invalid entry"; 
        }

        return output;
    } 

    console.log("Switch: ",switcher("a"))

    /*
        Blackjack Card Counting Game
    */
    var globalCounter = 0;

    function cardCount(card){
        holdBet = 'Hold';

        switch(card){
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                globalCounter++;
                break;
            case 10:
            case "J":
            case "Q":
            case "K":
            case "A":
                globalCounter--;
                break;
        }

        if(globalCounter > 0){
            holdBet = 'Bet';
        }
        return globalCounter+" "+holdBet;
    }

    cardCount(2); cardCount(4); cardCount(0); cardCount(0); cardCount(0);
    console.log(cardCount(6))

    /*Objects*/
    var myObject = {
        "name": "Adrian",
        "age": 21,
        "friends": ["friends"]
    }

    /*Access properties in object*/
    var myObject = {
        "name": "Adrian",
        "age": 21,
        "friends": ["friend1", "friend1", "friend3"],
    }

    var getName = myObject.name; //using dot notation
    var getAge = myObject.age; //using dot notation

    console.log("Accessing properties in object: ",getName, getAge);

    /*Updating object properties*/
    var myObject = {
        "name": "Adrian",
        "age": 21,
        "friends": ["friend1", "friend1", "friend3"],
    }
    console.log("Before Updating object properties: ",myObject);

    //updating properties
    myObject.name = "Ducao";
    myObject.age = 22;

    console.log("Updated object properties: ",myObject);

    /*Adding properties to object*/
    console.log("Before adding properties: ",myObject);
    myObject.status = "Complicated";

    console.log("After adding properties: ", myObject);

    /*delete properties from an object*/
    console.log("Before deleting property: ",myObject);
    delete myObject.status;
    console.log("After deleting property: ",myObject);

    /*using objects for lookups instead of switch or conditional*/
    function stockPile(item){
        var result = "";

        var itemList = {
            "soap": 21,
            "shampoo": 12,
            "condoms": 5,
            "lube": 3
        }

        result = itemList[item];
        return result;
    }

    console.log("Number of items remaining: ",stockPile("soap"));
    