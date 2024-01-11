/*   Data Manipulation in JavaScript*/

// Part 1: Math Problem

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;


// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//   (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//Check if all numbers are deivisible by 5.
const allDeivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0
console.log(`All number are divisible by 5: ${allDeivisibleBy5}`)

//Check if the first number is larger than last
const fisrtNumLargerThanLast = n1 > n4
console.log(`First number is larger than last: ${fisrtNumLargerThanLast}`)

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
const firstNumSubtractSecNum = n2 - n1

// Multiply the result by the third number.
const result = firstNumSubtractSecNum * n3

// Find the remainder of dividing the result by the fourth number.
const remainder = result % n4
console.log(`The remainder of dividing the result by the fourth number is ${remainder}`)

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate
const isLess25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(`No value is greader than 15:${isLess25} `)

console.log("-----------------Part2--------------")

//Part 2:Pracitical Math
const totalDistance = 1500;
const totalBudget = 175;
const fuelAvgCostPerGallon = 3;
const speed_55 = 55
const speed_60 = 60
const speed_75 = 75

const fuelEfficiency_55 = 30  // miles per gallon at 55 mph
const fuelEfficiency_60 = 28  // miles per gallon at 60 mph
const fuelEfficiency_75 = 23  // miles per gallon at 75 mph

// How many gallons of fuel will you need for the entire trip?
const totalFuel_55 = (totalDistance / fuelEfficiency_55).toFixed(2)
const totalFuel_60 = (totalDistance / fuelEfficiency_60).toFixed(2)
const totalFuel_75 = (totalDistance / fuelEfficiency_75).toFixed(2)
console.log(`${totalFuel_55} gallons of fuel for 55mph,
${totalFuel_60} gallons of fuel for 60mph,
${totalFuel_75} gallons of fuel for 75mph`)

// Will your budget be enough to cover the fuel expense?
const totalCost_55 = totalFuel_55 *fuelAvgCostPerGallon
const totalCost_60 = totalFuel_60 *fuelAvgCostPerGallon
const totalCost_75 = totalFuel_75 *fuelAvgCostPerGallon

console.log(`Total fuel cost $${totalCost_55} for driving 55mph,
Total fuel cost $${totalCost_60} for driving 60mph,
Total fuel cost $${totalCost_75} for driving 75mph`)


// How long will the trip take, in hours?
const totalHours_55 =totalDistance/speed_55
const totalHours_60 =totalDistance/speed_60
const totalHours_75 =totalDistance/speed_75

console.log(`Total hours${totalHours_55} for driving 55mph,
Total hours ${totalHours_60} for driving 60mph,
Total hours ${totalHours_75} for driving 75mph`)



