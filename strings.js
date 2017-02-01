"use strict";

console.log("Here we go...");
var inputType = document.getElementsByClassName("userString");
var buttonPress = document.getElementsByClassName("activate");

//function to run the string functions upon 'enter' keypress
function enterPress(event) {
    if (event.keyCode === 13) {
    	var testString = event.target.value; /*if you pass in 'var testString = "";'
    										  you are passing an empty string. Your
    										  functions can't do much with that.*/

		reversal(testString);
		alphabits(testString);
		palindrome(testString);
    } 
};

//function to run the string functions on the button press

function onClick(){
	var testString = inputType[0].value; /*since 'inputType' is assigned by 
										  'document.getElementsByClass', you 
										  need to reference the array with the
										  elements index in the HTMLCollection
										  that this method returns. May be simpler
										  to assign these elements an id, since you
										  could directly access the element by calling
										  the variable.*/
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
};

//function to determine if the user's input is a valid character, shows an alert if it's not
	function letterOnly(event){
	//watching for the key codes of all number keys
	var x = event.keyCode;
	if(event.keyCode >= 48 && event.keyCode <= 57){
		inputType.value = "";
		alert("Please enter a string of letters!");
		inputType[0].focus(); //again, need to reference by index
	}
}

//STRING FUNCTIONS


function reversal(str) {
	console.log('reversal()');
	//spliting the str up
	var stringSplit = str.split('');

	//reversing the split string
	var backwards = stringSplit.reverse();

	//joining the reversed string
	var backTogether = backwards.join('');

	//give me the reversed string
	return backTogether;
	console.log(backTogether);//this won't execute after the return statement.
}



function alphabits(str) {
	console.log('alphabits()');

	//split the string up 
	var stringSplit = str.split('');

	//sorting the split string
	var alphabet = stringSplit.sort();

	//joining the sorted string
	var inOrder = alphabet.join('');

	return inOrder;
	console.log(inOrder);
}



function palindrome(str) {
	//split, reverse, then join the string
	// var newWord = ;
	console.log('palindrome');
	if(str === str.split("").reverse().join("")){//this isn't working and I am not sure why
		alert("That's a palindrome!")
	} else {
		alert("I'm not mad...just disappointed you didn't give me a palindrome.");
	}
}



