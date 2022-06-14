// function squareSum(numbers){
//   if (numbers.length === 0) {
//     return 0;
//   }

//   // 1. возвести каждый элемент массива в квадрат
//   const mappedArr = numbers.map(el => Math.pow(el, 2));
//   console.log('mappedArr: ', mappedArr);

//   // 2. сложить все элементы массива
//   const result = mappedArr.reduce((acc, curr) => acc + curr);
//   console.log('result: ', result);


//   // 3. Вернуть результат
//   return result;
// }

// Optimised solution
const squareSum = (numbers) => numbers.length === 0 ? 0 : numbers.map(el => Math.pow(el, 2)).reduce((acc, curr) => acc + curr);


console.log(squareSum([1,2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);
console.log(squareSum([]), 0);
