/**
 * This function prints a hastag stair of n numbers of steps, depending the number that we pass it.
 * @param {int} n Numbers of steps in the stair.
 */
function stairCase(n) {
  try {
    if (n < 0) throw new Error('N cannot be a negative number');
    if (!n) throw new Error('Please, enter a correct number');
    let array = [];
    for (let i = 0; i <= n - 1; i++) {
      array.push(" ");
    }
    for (let j = 1; j <= n; j++) {
      array[array.length - j] = "#"
      console.log(array.join(""));
    }
    return array.length;
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = stairCase;
