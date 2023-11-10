// Allows for inputing arguments through the comand line.
const arg = process.argv;
let argArr = arg.slice(2);

 // Converts the command line input into numbers.
const toNumber = function(value) {
  return Number(value);
}

// Sort input values array numerically in ascending order.
const nums = argArr.map(toNumber).sort((a,b) => a-b); // 

// A timer that will 'beep' after an amount of time has passed.
const timer = () => {
  for (let i = 0; i < nums.length; i++) { //loop through num array
    if (nums[i] < 0 || isNaN(nums[i])) { // if the value is negetive or isn't a number...
      continue; // skip it
    }
    setTimeout(() => {
      process.stdout.write('\x07'); // beep sound
      console.log(`Beep at ${nums[i]} seconds!`); // beep message
    }, (nums[i] * 1000)); // multiply array value by 1000 miliseconds
  }  
}

timer(nums)