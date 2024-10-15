// SEARCHES

// Lets go through some of the basic searches
// Linear search

const unsortedArray: number[] = [4, 2, 7, 1, 3, 9, 6, 5, 8];

function LinearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (unsortedArray[i] === target) {
      return i;
    }
  }
  return -1;
}

// console.log(LinearSearch(unsortedArray, 54));

// Binary search!
// Like searching for things in a dictionary
// O(log(N)) time because you're splitting things in half every time
// The number of times you halve something till you get one element left is log2(N)
// Only works on sorted things

// First we get an array of sorted values
// They're sorted, but they're not uniform
// What's the fastest way to find a specific number (provided it's in the array) ?
// Binary search!

const sortedNumbers: number[] = [
  3, 8, 12, 15, 19, 24, 29, 33, 37, 42, 47, 52, 58, 63, 69, 73, 78, 85, 91, 97,
];

function BinarySearch(arr: number[], target: number): number {
  // Let's define our midpoint, left point and right point. For odd numbers, it'll choose the left number
  let mid = Math.floor(arr.length / 2);
  let l = 0;
  let r = arr.length - 1;

  console.log(`Target number is ${target} and we just ran into ${arr[mid]}`);

  while (l <= r) {
    // If l > r, it's not in the array
    if (target == arr[mid]) {
      console.log(`Target found at index ${mid}`);
      return mid;
    } else if (target < arr[mid]) {
      console.log(`Time for a new target! Let's go left.`);
      r = mid - 1; // We know mid isn't it, so we can go one less
      mid = Math.floor((l + r) / 2);
    } else {
      console.log(`Time for a new target! Let's go right.`);
      l = mid + 1; // Again we can go up by one.
      mid = Math.floor((l + r) / 2);
    }
  }
  return -1;
}

console.log(BinarySearch(sortedNumbers, 63)); // 47 is the middle index fwiw

// Nice!
// Now lets get to the good stuff
// DFS! There's a lot of theory that is needed here, but at the end of the day implementing this will be the way to go.
