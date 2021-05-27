console.log("Functional Programming Star Wars Playground")


const pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    strength: 13,
    years: 54,
    isForceUser: true,
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    strength: 34,
    years: 22,
    isForceUser: false,
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    strength: 67,
    years: 67,
    isForceUser: true,
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    strength: 3,
    years: 41,
    isForceUser: false,
  }
];

// Find if any Rebels
const areThereAnyRebels = pilots.some(pilot => pilot.faction === "Rebels");

// Get dets on Rebels
const detsOfRebels = pilots.filter(rebel => rebel.faction === "Rebels");

// Get names of Rebels
const nameOfRebels = detsOfRebels.map(name => name.name);

// Reduce strength a single number
const totalStrength = pilots
.map(pilot => pilot.strength)
.reduce(function (acc, score) {
  return acc + score;
}, 0);

// Find oldest pilot in group
const oldestPilot = pilots.reduce(function (oldest, pilot) {
  return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});

// Find pilots older than 30 years

const thirtyPlusPilots = pilots.filter(pilot => pilot.years > 30);

// find the sum of years

const totalAge = pilots.reduce((total, amount) => 
  total + amount.years, 0);

// pull out all years - DOESN'T QUITE WORK
const yearsArray = pilots.reduce((total, amount) => {
  total.push(pilots.years);
  return total;
}, []);

// find average age of pilots - DOESN'T QUITE WORK
const avgAgeOfPilots = pilots.reduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length-1) {
    return total/array.length;
  } else {
    return total;
  }
});

// Log statements
// console.log(areThereAnyRebels);
// console.log(detsOfRebels);
// console.log(nameOfRebels);
// console.log(totalStrength);
// console.log(oldestPilot);
// console.log(thirtyPlusPilots);
console.log(totalAge);
console.log(yearsArray);
console.log(avgAgeOfPilots);