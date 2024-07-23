

// sum of the numbers
// const sumOfNumbers = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// };

// find largest number
// const findLargest = (numbers) => {
//     let largest = numbers[0];
//     if (numbers[1] > largest) {
//         largest = numbers[1];
//     }
//     if (numbers[2] > largest) {
//         largest = numbers[2];
//     }
//     return largest;
// };


// const numbersArray = [3, 7, 1];
// console.log(findLargest(numbersArray)); 



// sum of odds
// const sumOfOdds = (numbers) => {
//     let sum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 !== 0) {
//         sum += numbers[i];
//      }
//     }

//     return sum;
//   };

//   const array = [1, 2, 3, 4, 5];
//   console.log(sumOfOdds(array));



//sum of squares
  const filterAndSquareEvents = (numbers) => {
    let result = [];
    
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        result[i] = numbers[i] * numbers[i];
        
      }
    }
  
    return result;
  };
  
  
  const array = [1, 2, 3, 4, 5];
  console.log(filterAndSquareEvents(array)); 
  