//! JavaScript function to check if an integer is a `Palindrome`

function isPalindrome(x) {
	// Convert the integer to a string
	const str = x.toString();

	// Reverse the string
	const reversedStr = str.split("").reverse().join("");

	// Check if the original string is the same as the reversed string
	return str === reversedStr;
}

// Example usage:
console.log(isPalindrome(525));
console.log(isPalindrome(-999));
console.log(isPalindrome(90));
