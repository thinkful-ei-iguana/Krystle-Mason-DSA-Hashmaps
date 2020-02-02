//1,3,5,7

//1
const HashMap = require('./HashMap');

function main() {
  const lotr = new HashMap();



  lotr.set('Hobbit', 'Bilbo');
  lotr.set('Hobbit', 'Frodo');
  lotr.set('Wizard', 'Gandolf');
  lotr.set('Human', 'Aragon');
  lotr.set('Elf', 'Legolas');
  lotr.set('Maiar', 'The Necromancer');
  lotr.set('Maiar', 'Sauron');
  lotr.set('RingBearer', 'Gollum');
  lotr.set('LadyOfLight', 'Galadriel');
  lotr.set('HalfElven', 'Arwen');
  lotr.set('Ent', 'Treebeard');

  console.log(lotr);
  return lotr;

}

// main();
//2
const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

// WhatDoesThisDo();

//3

//4
function RemoveDuplicates(str) {
  let map = new Map();
  let nonDupe = '';
  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i].toLowerCase())) {
      map.set(str[i])
      nonDupe += str[i];
    }
  }
  return nonDupe;
}
console.log(RemoveDuplicates('google all that you think can think of'))

//5

function palindrome(str) {
  let map = new Map();
  let unmatched = false;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (map.has(char)) {
      let value = map.get(char);
      map.set(char, value + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (let value of map.values()) {
    if (value % 2 === 1) {
      if (unmatched) {
        return false;
      } else {
        unmatched = true;
      }
    }
  }
  return true;
}
// console.log(palindrome('north'));

function removeDuplicates2(str) {
  const stringHolder = new Map();
  let result = '';
  str.split('').forEach(letter => {
    if (!stringHolder.has(letter)) {
      stringHolder.set(letter, '');
      result += letter;
    }
  });
  return result;
}

//7




//SOLUTION IN LINK BELOW
//https://gist.github.com/tparveen/70569a40ad633d7d27ac07e728e2a7ee