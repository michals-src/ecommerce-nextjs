const canSum = (targetSum, numbers, memo = {}) => {
  if (memo.hasOwnProperty(targetSum)) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    let diff = targetSum - num;
    //console.log(`${targetSum} -  ${num} = `, diff, memo);
    if (canSum(diff, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const reminder = targetSum - num;
    const reminderResult = howSum(reminder, numbers);

    if (reminderResult !== null) {
      memo[targetSum] = [...reminderResult, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return memo[targetSum];
};

//console.log(canSum(7, [5, 3, 4, 7]));
console.log(howSum(700, [500, 3, 4, 7]));
