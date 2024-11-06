//! Function to solve the Josephus problem using recursion
function josephus(person, k, idx = 0) {
	// If only one person is left, log their position and return
	if (person.length === 1) {
		console.log(person[0]);
		return;
	}

	// Calculate the new index and wrap around if necessary
	idx = (idx + k) % person.length;

	// Remove the person at the new index
	person.splice(idx, 1);

	// Recursively call the function with the updated list and index
	josephus(person, k, idx);
}

// Number of people in the circle
const n = 17;

// Number of people to skip before eliminating one (adjusted for zero-based index)
const k = 2 - 1;

// Create an array of people from 1 to n
const person = Array.from({ length: n }, (_, i) => i + 1);

// Call the Josephus function
josephus(person, k);
