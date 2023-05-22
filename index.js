function hasTargetSum(array, target) {
  // Write your algorithm here
 
    //Create a set to store the complement of each element
    const seenNumbers = new Set();

  for (let num of array) {
    const complement = target - num;

    // Check if the current element's complement exists in the set
    if (seenNumbers.has(complement)) {
      return true;
    }

    seenNumbers.add(num);
  }

  return false;
}


  
  


/* 
  Write the Big O time complexity of your function here
*/
//time complexity of the hasTargetSum function is O(n), where n is the length of the array.

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/
// we iterate over each element of the array using a for...of loop. For each element, we calculate its complement. 
//We use a Set called seenNumbers to store the numbers we have seen so far.

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log("=>", hasTargetSum([7, 9, 2, 2, 5], 20));
  console.log("=>", hasTargetSum([5,10, 6, 2, 5], 7));
  console.log("=>", hasTargetSum([1,3, 0, 15, 11, 25, 2, 5], 15));
}

module.exports = hasTargetSum;
