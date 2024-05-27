// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
    var removeElement = function(nums, val) {
        let k = 0;
      for (let i = 0; i < nums.length; i++) {
        console.log(0, i, nums[k], nums[i], k);
          if (nums[i] != val) {
              console.log(1, i, nums[k], nums[i], k);
              nums[k] = nums[i];
              console.log(2, i, nums[k], nums[i], k);
              k++; 
              console.log(3, i, nums[k], nums[i], k);
          };
      };
      return k;  
  };
    // resalt = nums.filter(myFunction);
    // function myFunction(value) {
    // return value != val;
    // };
    // let k = resalt.length;
    // nums = resalt;
    // return nums;
    // // return k + ', nums = [' + nums.join(',') + ']';
console.log(removeElement([3,2,2,3], 3))