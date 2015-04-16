//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a User constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

 var User = function(name, email, pw, totalScore) {
 	this.name = name;
 	this.email = email;
 	this.pw = pw;
 	this.totalScore = totalScore;
 };


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

var Question = function(title, answersArray, rightAnswer, difficulty) {
	this.title = title;
	this.answersArray = answersArray;
	this.rightAnswer = rightAnswer;
	this.difficulty = difficulty;

};


//Create a users Array which is going to hold all of our users.

var users = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

var dave = new User('Dave', 'davisjchesler@gmail.com', 'yupokay', "97");
var kyle = new User('Kyle', 'kyleschesler@gmail.com', 'okayyeah', "66");
var dan = new User('Dan', 'danjchesler@gmail.com', 'maybesure', "12");

users.push(dave, kyle, dan);

//Create a questions Array which is going to hold all of our questions

var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

var inheritance = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes?', ["True", "False"], "True", "Easy");
var scripting = new Question('T/F: JavaScript is just a scripting version of Java', ["True", "False"], "False", "Medium");
var values = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value", ["True", "False"], "Hard");


//Now push all of your instances of Question into the questions Array

questions.push(inheritance, scripting, values);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.
function looper (arr1, arr2){
	var length;
	if(arr1.length > arr2.length){
		length = arr1.length
	} else {
		length = arr2.length
	}
	for(var i = 0; i < length; i++){
		console.log(arr1[i], arr2[i])
	}
}

looper(questions, users);
