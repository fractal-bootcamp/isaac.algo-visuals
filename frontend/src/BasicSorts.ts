// This page will house the basic logic that I'll use to for the sorts.
// Lets start with the basics!

// Bubble sort! As easy as it gets
// Look at an element
// Look at the next one
// If the second one is smaller, swap them
// Repeat until sorted

const unsortedArray = [5, 2, 8, 3, 1, 6, 4, 9];

let swapped = true;
for (let i = 0; i < unsortedArray.length - 1; i++) {
  if (swapped === false) break; // Added this line
  swapped = false;
  for (let j = 0; j < unsortedArray.length - 1 - i; j++) {
    // Added this inner loop
    console.log(`Lets compare ${unsortedArray[j]} and ${unsortedArray[j + 1]}`);
    if (unsortedArray[j] > unsortedArray[j + 1]) {
      console.log(`Swapping ${unsortedArray[j]} and ${unsortedArray[j + 1]}`);
      swapped = true;
      [unsortedArray[j], unsortedArray[j + 1]] = [
        unsortedArray[j + 1],
        unsortedArray[j],
      ];
    }
  }
}
console.log("Sorting complete:", unsortedArray);

// Time for selection sort!
