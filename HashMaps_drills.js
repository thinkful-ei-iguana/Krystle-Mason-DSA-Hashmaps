//1,3,5,7

//1
const HashMap = require('./HashMap');

function main() {
  const lotr = new HashMap();

  lotr.MAX_LOAD_RATIO = 0.5;

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


  return lotr;

}

main();

//3


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
console.log(palindrome('north'));

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