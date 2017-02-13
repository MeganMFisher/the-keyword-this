// //We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
//   // 1) What is the purpose of the 'this keyword'?

//       var this = "the value of this is determined by how a function is called. You can use it when there are multiple objects in the same function";

//   // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

//       var explicit = "Use really one when you break implicit. JS first checks for this and if it is used it will not go check for any other rule";
//       var implicit = "Used 95% of the time. ";
//       var new = "creates new object which goes into the function";
//       var default_window = "if there are no explicit or implicit rules applied it will go to the default-window";

//   // 3) What is the difference between call and apply?

//       var call = "The call method calls a function with a given this value and arguments provided individually";
//       var apply =  "The apply method calls a function with a given this value and arguments provided as an array";

//   // 4) What does .bind do?

//       var bind = "The bind method creats a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. It binds things together and sets them up for later."


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

  var user = {
    username: "",
    email: "",
    getUsername: function() {
      return this.username;
    }
  }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


user.getUsername();


// Write the function definitions which will make the following function invocations function properly.

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.moveCar = function() {
      return this.move += 10;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. 
//You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, 
//use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. 
//*Don't add getYear as a property on both objects*.

//Note(no tests)
  



//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.bind(myUser)(); 




//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //username

//In the example above, what is the 'this keyword' bound to when getUsername runs?

//this.username

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.

