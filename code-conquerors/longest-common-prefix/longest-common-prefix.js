function longestCommonPrefix(str) {
	if (!str.length) return "";

	let prefix = str[0];
	for (let i = 1; i < str.length; i++) {
		while (str[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1);
			if (!prefix) return '" "';
		}
	}

	return prefix;
}

// Example usage
const test1 = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(test1)); // Output: "fl"

const test2 = ["dog", "raceway", "car"];
console.log(longestCommonPrefix(test2)); // Output: ""

const test3 = ["intersperses", "interstellar", "interstate"];
console.log(longestCommonPrefix(test3)); // Output: "inters"

const test4 = ["throne", "throne", "throne"];
console.log(longestCommonPrefix(test4)); // Output: "throne"

const test5 = ["apple", "ape", "apricot"];
console.log(longestCommonPrefix(test5)); // Output: "ap"
