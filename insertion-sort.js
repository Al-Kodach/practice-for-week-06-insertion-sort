// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr, sorted = []) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here
  const arrLen = arr.length
  const sortedLen = sorted.length

  let el = arr[arrLen - 1];

  console.log(sorted.join(','));

  if (arr.length === 0) {
    return sorted;
  }

  if (sortedLen === 0) {
    sorted.push(el);
  }

  for (let i = sortedLen - 1; i >= 0; i--) {
    let sortedEl1 = sorted[i];
    let sortedEl2 = sorted[i - 1];

    if (el < sortedEl1 && !sortedEl2) {
      sorted[i + 1] = sortedEl1;
      sorted[i] = el;
    } else if (el > sortedEl1 && i === sortedLen - 1) {
      sorted.push(el);
    } else if (el < sortedEl1 && el < sortedEl2) {
      sorted[i + 1] = sortedEl1;
    } else if (el < sortedEl1 && el > sortedEl2) {
      sorted[i + 1] = sortedEl1;
      sorted[i] = el;
    }
  }


  return insertionSort(arr.slice(0, arrLen - 1), sorted);
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  let divider = 0;

  loop1:
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];

    loop2:
    for (let j = divider; j >= 0; j--) {
      let sortedEl = arr[j - 1];

      if (!sortedEl || sortedEl < el) {
        arr[j] = el;
        divider++;

        console.log(arr.join(','));

        continue loop1;
      } else if (sortedEl > el) {
        arr[j] = sortedEl;
      }
    }
  }

  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];