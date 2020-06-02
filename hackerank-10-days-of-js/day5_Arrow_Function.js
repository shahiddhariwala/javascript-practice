/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  return nums.map((el) => {
    if ((el & 1) === 1) {
      return el * 3;
    } else {
      return el * 2;
    }
  });
}

(function main() {
  const a = [1, 2, 3, 4, 5];
  console.log(modifyArray(a).toString().split(",").join(" "));
})();
// 3 4 9 8 15
