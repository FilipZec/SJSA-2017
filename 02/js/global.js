//objects

// var myFirstObject = {firstName: "Filip", lastName:"Zaprov", favorateAuthor: "BAB"};
// console.log(myFirstObject);
// console.log(myFirstObject.favorateAuthor);
// console.log("jas sum" + myFirstObject.firstName
// +" " +myFirstObject.lastName + "i mojot omilen avtor  e" + myFirstObject.favorateAuthor )
// var yearScale = {5: "Baby", 100: "Old" };
// console.log(yearScale);
// console.log(yearScale["5"]);

// var person = "Kobe";
// var anotherPerson = person;

// person = "Bryant";
// console.log(anotherPerson);
// console.log(person);

// var person = {name: "Kobe"};
// var anotherPerson = person;

// person.name = "Bryant";

// console.log(anotherPerson.name);
// console.log(person.name);

// var mango = new Object();
// mango.color = "yellow";
// mango.shape = "round";
// mango.sweetnessLevel = 8;

// console.log(mango);
// console.log(mango.sweetnessLevel);
// delete mango.sweetnessLevel;
// console.log(mango.sweetnessLevel);
// console.log(mango);
  
// for in


//  var book = { 
// 	name: "invinite jest",
// 	yaer: 1994,
// 	author:"David Foster Wallace",
// 	genre: "Satire",
// 	awards: 506
// }

// console.log(book);

// for (var x  in book){
// 	console.log(book[x]);
// }

// // for loop

// for (var i = 0; i <= 10; i++){
// 	console.log("Current count is "+i);
// }


// for(var i=5; i <= 100; i+=5){
// 	console.log("Current count is " +i);
// } 
// for (var i=100 ; i >=0; i=10){
// 	console.log("Current count is" +i);
// }

// var names =  [ "mario", "dimitar", "borjan",  "kristina", "kristijan", "tomislav", "dejan", "martina", "marija","jovan" ]

// for (var i = 0; i < names.lenght; i++){
// 	if (names[i].lenght == 5) {
// 		console.log(names[i]);
// 	}
// }

// var i = 0;
// while (i <= 5){
// 	console.log("Current count is " + i);
// 	i++;
// }
 
//  

// var i = 0;

// do{
// 	console.log("Current count is " + i);
// 	i++;
// }while(i <= 5);

// functions
// function firstFunction(){
// 	console.log("hello world");
// }
// firstFunction();

// function hello(){
// 	return "hello world";
// }
// console.log(hello());
// var
// var
// function multiplier(){
// 	 return 5 * 5;
// }
// 	console.log(multiplier());

// function divider(num01, num02){
//      return num01 / num02;
// }

// console.log(divider(10, 2));

// // dogCalculator(age * 7);
// function dogCalculator(age){
// 	console.log("Tvoeto kuce ima" + age * 7 + "vo kuceski godini." );
// }
// dogCalculator(5);

// var drawing = function(){
//      var result = "";

//      var ground =function(size){
//      	for (var i = 0; i < size; i++){
//      		result += "_";
//      	}
//      }
     
//      var peaks = function (size){
//      	result += "/";
//      	for (var i = 0; i < size; i++){
//      		result += "'";
//      	}
//         result +="\\";

//      }
//         ground(5);
//         peaks(3);
//         ground(10);
//         peaks(7);
//         ground(4);
//         return result;

// }
// console.log(drawing());

//  console.log("Filip says", helloworld());

// function helloworld(){
// 	return "hello world";
// }

// function broj(x){
// 	if((x%2)>0){
// 		console.log("brojot"+ x +"e neparen");

// 	}
// 	else console.log("brojot" + x + " e paren");

// }
//  broj(2);
//  
// anonymous callback function
// var cars = ["fico", "fiat", "zastava"];

// vars.forEach(function(car, index){
// 	console.log(car + "at index number" + index);
// });

// var first = function(){
// 	setTimeout(function)
// 	console.log(1);\
// },1000);
// }

// var second = function(){
// 	console.log(2)
// }

// function greeting (name){
// 	alert("Hello " + name + ".");
// }
// function processUser(callback){
// 	var name = prompt("What's your name?");
// 	callback(name);

// }
// processUser(greeting);

