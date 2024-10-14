// SEARCHES

import { MdNotListedLocation } from "react-icons/md";

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

console.log(LinearSearch(unsortedArray, 54));
