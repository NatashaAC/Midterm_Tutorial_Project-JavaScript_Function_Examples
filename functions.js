// Global Variable
var numToAdd = 5;

// Function that uses global variable and parameter
function addition(number) {

    // Code to execute
	console.log(number + 10);
    
}
// Calling the function, and passing in a variable 
// The value of numToAdd will be passed to the number 
addition(numToAdd);
// 5 + 10
// Result 15

// Function that uses private variables and no parameter
function coolAnimals() {

	// Private Variables
	var animal1 = 'Cheetah';
    var animal2 = 'Wolf';

	// Code to execute
	console.log('Some cool animals are: ' + animal1 + ' and ' + animal2);

}
coolAnimals();
// Result Some cool animals are Cheetah and Wolf

// Function that uses two parameters
function favouriteAnimal(name, animal) {
    alert(name + "'s favourite animal is a " + animal);
}
favouriteAnimal('Luca', 'Dog');