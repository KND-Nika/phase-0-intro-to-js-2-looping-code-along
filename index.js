// Code your solutions in this file

// ASSIGNMENT
// define function called countDown
// Write a while loop
// Must be a positive integer that counts down to zero from 10 using console.log

function countDown(number) { // number === 10
  while (number >= 0) { // true // true
    console.log(number--); // 10 gets console logged. number gets decremented to 9. // print 9, decrement number to 8
  }
}

// EXAMPLE 
const giftFrom = ["Samantha", "Carrie", "Charlotte"];

function writeCards(giftFrom, eventName) {
  // create an array
  const thankYouMsgs = []; 

  for (let i =0; i < giftFrom.length; i++) {
    // input thank you messages in array
    thankYouMsgs.push(`Thank you, ${giftFrom[i]}, for the wonderful ${eventName} gift!`);
  }
  // return array
  return thankYouMsgs;
}


// let countup = 0;
// while (countup <= 10) {
//   console.log(countup++);
// }


// EXAMPLE 1
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   // debugger;
// }

// EXAMPLE 2
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     // debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts); 