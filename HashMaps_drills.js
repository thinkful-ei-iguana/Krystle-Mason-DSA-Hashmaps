const HashMap = require('./hashMap')

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

function main() {
  const lotr = new HashMap()
  const data = [
    { "Hobbit": "Bilbo" },
    { "Hobbit": "Frodo" },
    { "Wizard": "Gandolf" },
    { "Human": "Aragorn" },
    { "Elf": "Legolas" },
    { "Maiar": "The Necromancer" },
    { "Maiar": "Sauron" },
    { "RingBearer": "Gollum" },
    { "LadyOfLight": "Galadriel" },
    { "HalfElven": "Arwen" },
    { "Ent": "Treebeard" }

  ];
}
