



// we are going to count from 1 to 10


/*for (let p = 5; p >=0; p--) {
    console.log(p);
}



// while loop

/*let roll = 0

while (roll !== 6) {
    roll = Math.floor(Math.random() * 6) +1
    console.log("you rolled a " + roll );
}
console.log("congrats you rolled a 6!")


// ATM system simulation (keep asking for pin until correct one is entered)

/*let pin = true;

while (pin !== true) {
    console.log("Incorrect pin")
}
console.log("please enter you correct pin")

//while (true) {
//   console.log("Hello world")
//

/*let pin1 =123456
while (pin1 !== 123456) {
    console.log("please enter your correct pin")
}
console.log("correct pin")*/

//Do while loop

/*let i = 0

do{
    console.log("i is " + i);
    i++;
} while (i < 3);

 //we are going to rewrite the rolling dice game using do while loop

/*let diceroll = 0;

do {
    diceroll = Math.floor(Math.random() * 6) + 1;
    console.log("you rolled a " + diceroll);
} while (diceroll !== 6);

console.log("congrats you rolled a 6!");




// break in a loop
/*const password =false;
while (password !== true) {
    console.log("incorect password,try again");
    break;
}
console.log("correct password, welcome to your account");








// continue in a loop

/*for (let n =1; n <= 10; n++) {
    if (n === 3 || n === 4) continue;
    console.log(n);
}


 /*const arr = ["banana", "apple", "mango", "grape", "orange", "pineapple", "watermelon", "kiwi", "strawberry", "blueberry"];

  for (let x = 0; x < arr.length; x++) {
    console.log(arr[x]);

 }*/

//given an array of numbers that is
//numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
//1. log the even numbers 
//2.log the odd numbers
//3.log the numbers that are divisible by 3
//4. multiply all the numbers by 2 and log the result
//5. find the largest number in the array and log it
//6. find the smallest number in the array and log it


const numbers = [10,20,3,4,5,6,7,8,9,10,80,12,81,14,15,1,17,18,19,20,21,22,23,24,25];
//1. log the even numbers 
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}


//2.log the odd numbers
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 !==0){
        console.log(numbers[i]);

    }
}

//3.log the numbers that are divisible by 3
for(let z=0; z<numbers.length; z++){
    if (numbers[z] % 3 ===0){
        console.log(numbers[z]);
    }
}

//4. multiply all the numbers by 2 and log the result
for(let x=0; x < numbers.length; x++){
    console.log(numbers[x] * 2);
}
    

//5. find the largest number in the array and log it
let largest =numbers[0];
for (let i = 1; i < numbers.length; i++){
    if (numbers[i]> largest){
        largest = numbers[i];
    }
}
console.log("the largest number is " + largest);

//6. find the smallest number in the array and log it
let smallest = numbers[0];
 for (let i= 0; i <numbers.length; i++){
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
console.log("the smallest number is " + smallest);  // these is the bubble sort algorithm 