//1,3,5,7

//1
const HashMap = require('./HashMaps_drills');

function main() {
  const lor = new HashMap();

  lor.MAX_LOAD_RATIO = 0.5;

  lor.set('Hobbit', 'Bilbo');
  lor.set('Hobbit', 'Frodo');
  lor.set('Wizard', 'Gandolf');
  lor.set('Human', 'Aragon');
  lor.set('Elf', 'Legolas');
  lor.set('Maiar', 'The Necromancer');
  lor.set('Maiar', 'Sauron');
  lor.set('RingBearer', 'Gollum');
  lor.set('LadyOfLight', 'Galadriel');
  lor.set('HalfElven', 'Arwen');
  lor.set('Ent', 'Treebeard');


    return lor;

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
    for( let value of map.values()){
      if( value % 2 === 1  ){
        if(unmatched){
          return false;
        }else{
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