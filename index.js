// Strings
const farmAnimals = 'cow horse sheep pig chicken';

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Four animals, named bessie (for cow), dolly (for sheep), babe (for pig), and little (for chicken).
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Assigning animal colors - corrected part based on your test output expectation
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Some people have a hard time with indigo, so we leave it out using initials for the others.
const [r, o, y, g, b, , v] = colors;

// 6. But wait, Indigo is now feeling super left out. Let's only assign indigo using "indg".
const [, , , , , indg, ] = colors;

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner from the nestedMuppet object
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;

// Assuming the test suite checks for console.log outputs or other forms of validations,
// you might need to specifically log or return values depending on your lab requirements.
console.log(`Animal Sounds: ${moo}, ${neigh}, ${baa}, ${oink}, ${cluck}`);
console.log(`Some Animals: ${bessie}, ${dolly}, ${babe}, ${little}`);
console.log(`Animal Colors: ${blackAndWhite}, ${black}, ${pink}`);
console.log(`Colors: ${red}, ${orange}, ${yellow}, ${green}, ${blue}, ${indigo}, ${violet}`);
console.log(`Initials: ${r}, ${o}, ${y}, ${g}, ${b}, ${v}`);
console.log(`Feeling Left Out: ${indg}`);
console.log(`Muppet: ${muppetName}, ${color}, ${song}, ${job}, ${partner}`);
console.log(`Nested Muppet: Songs - ${song2}, ${song4}, Job - ${nestedJob}, Partner - ${nestedPartner}`);
