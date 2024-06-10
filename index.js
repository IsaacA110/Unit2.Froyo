// The user is prompted for froyo flavors upon entering the website.
const userInputString = prompt(
  "Enter the froyo flavors you would like to order. Be sure to seperate each flavor with a comma.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// The user's input string is split into an array of strings.

const stringArr = userInputString.split(",");
const stringCounts = {};

// A loop is used to iterate through the array of flavors.

for (let i = 0; i < stringArr.length; i++) {
  const str = stringArr[i];
  if (stringCounts[str]) {
    // If the string already exists in the counts object, increment its count
    stringCounts[str]++;
  } else {
    // If the string doesn't exist in the counts object, initialize its count to 1
    stringCounts[str] = 1;
  }
}
// Log the counts of each string
for (const [str, count] of Object.entries(stringCounts)) {
  console.log(`${str}: ${count}`);
}

// An object is used to keep count of how many orders there are of each flavor.

console.table(stringCounts);
