const arr = [1,2,3,4,5,6,7,8,9,10];

// array methods on add and remove elements
//1 .push() . adds an element to the end of an array
// arr.push(11);

//2.pop() -removes the last element from an arry
arr.pop();
console.log(arr);

//3.splice() -removes an element from a specific index in an array
arr.splice(2,1); // removes the element at index 2
console.log(arr);

//4.shift() -removes the first element from an array
arr.shift();
console.log(arr);

//5.unshift() -adds an element to the begining of an array
arr.unshift(0);
console.log(arr);