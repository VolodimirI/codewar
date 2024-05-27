// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     resalt = nums1.concat(nums2);
//     resalt = resalt.sort(function(a, b){return a - b});
//     y = resalt.length - n - m;
//     for (let i = 0; i < y; i++)
//         resalt.shift();
//     return resalt;
// };
var merge = function(nums1, m, nums2, n){
//     mm = m;
//  {
//     for (let j = 0; j<n;  j++){
//     nums1[m] = nums2[j]; m++;
// }}
// console.log(nums1.length);
// y = nums1.length - mm - n;
// for (i = 0; i < y; i++){
//     nums1.pop();
// }
// nums1 = nums1.sort(function(a, b){return a - b});
//     return nums1;

// nums1.splice(m);
// nums2.splice(n);
// nums1.push(...nums2);
// return nums1;

nums1.splice(m);
nums2.splice(n);
nums1.push(...nums2);
return nums1.sort((a, b) => a - b)


}

console.log(merge([1,2,3,0,0,0,0,0], 3, [2,5,6,0], 3))