//Creates user class to store users informaiton
class user {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

function greet(user) {
	console.log("Hello " + user.name +". Welcome to the site!");
};

function call(user) {
	console.log("We are calling your phone number now.");
	console.log(user.phone);
}

//Greets and calls the user once registration is complete.
function regComplete(user) {
	greet(user);
	call(user);
}

//Prompts user for registration information
function registration() {
	let x = new user();
	x.name = prompt("What is your full name?");
	x.phone = prompt("What is your phone number?");
  console.log("Thanks for registering, "+x.name);

	regComplete(x);

	return x;
}
let userData = [];

//Calls registration function and stores returned value (object) into userData array
userData.push(registration());
