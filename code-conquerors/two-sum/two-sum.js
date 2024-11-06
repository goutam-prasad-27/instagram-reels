//! Question: How can you find two indices in an array that add up to a specific target?

// Find two indices in arrNum that add up to target.
const twoSum = (arrNum, target) => {
	// Store numbers and their indices.
	const map = new Map();

	// Loop through arrNum.
	for (let i = 0; i < arrNum.length; i++) {
		// Find the complement.
		const complement = target - arrNum[i];

		// Check if complement is in map.
		if (map.has(complement)) {
			// Return indices if found.
			return [map.get(complement), i];
		}

		// Add number and its index to map.
		map.set(arrNum[i], i);
	}

	// Return empty array if no pair found.
	return [];
};

// Example usage.
let arrNum = [2, 7, 6, 1, 15];
let target = 8;
console.log(twoSum(arrNum, target));
