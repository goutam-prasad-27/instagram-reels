//! How To Convert Roman to Integer In JavaScript ?

function romanToInt(string) {
	// Create an object to map Roman numerals to their corresponding integer values
	const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	let total = 0,
		current,
		previous = 0;

	// Loop through the string from the end to the beginning
	for (let i = string.length - 1; i >= 0; i--) {
		// Get the integer value of the current Roman numeral
		current = roman[string[i]];

		// If the current value is greater than or equal to the previous value, add it to the total
		if (current >= previous) {
			total += current;
		} else {
			// If the current value is less than the previous value, subtract it from the total
			total -= current;
		}

		// Update the previous value to the current value
		previous = current;
	}

	// Return the final total which is the integer representation of the Roman numeral
	return total;
}

// Example usage:
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("XC")); // Output: 90
console.log(romanToInt("CDV")); // Output: 405
console.log(romanToInt("CLM")); // Output: 1050
console.log(romanToInt("XMDC")); // Output: 1590
console.log(romanToInt("MMMMMMMMMM")); // Output: 10000
