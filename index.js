console.log("Functional Programming Star Wars Playground")


const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    strength: 13,
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    strength: 34,
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    strength: 67,
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    strength: 3,
  }
];

// Find if any Rebels
const areThereAnyRebels = pilots.some(pilot => pilot.faction === "Rebels");

// Get dets on Rebels
const detsOfRebels = pilots.filter(rebel => rebel.faction === "Rebels");

// Get names of Rebels
const nameOfRebels = detsOfRebels.map(name => name.name);

// Reduce strength a single number
const avgStrength = pilots
.map(pilot => pilot.strength)
.reduce(function (acc, score) {
  return acc + score;
}, 0);

// Log statements
console.log(areThereAnyRebels);
console.log(detsOfRebels);
console.log(nameOfRebels);
console.log(avgStrength);