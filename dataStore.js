'use strict';

let currentTable = [];
let questionIndexArray = [0, 1, 2, 3, 4, 5, 6];
let answerIndexArray = [0, 1, 2, 3];

const STORE = [{
  question: 'You must get a permit to modify what in Colorado?',
  answers: [
    'The weather',
    'Your car',
    'Your house',
    'A family member\'s will'
  ],
  correctAnswer: 'The weather',
  backgroundImageClass: 'colorado'
},
{
  question: 'Your frog has died a tragic death in a frog-jumping competition in California. You are prohibited from doing what with your deceased amphibian friend?',
  answers: [
    'Having him stuffed at a taxidermist',
    'Burying him within 100 feet of a body of water',
    'Eating him',
    'Leaving his body in the frog-jumping arena'
  ],
  correctAnswer: 'Eating him',
  backgroundImageClass: 'california'
},
{
  question: 'In Florida, bar and restaurant owners are prohibited from hosting what type of competition?',
  answers: [
    'Drinking',
    'Dwarf-tossing',
    'Fencing',
    'Sandcastle building'
  ],
  correctAnswer: 'Dwarf-tossing',
  backgroundImageClass: 'florida'
},
{
  question: 'What illegal activity is permissible under life-threatening conditons in Idaho?',
  answers: [
    'Fratricide',
    'Jaywalking',
    'Public intoxication',
    'Cannibalism'
  ],
  correctAnswer: 'Cannibalism',
  backgroundImageClass: 'idaho'
},
{
  question: 'In Kentucky, every legislator, public officer, and lawyer make an oath stating they\'ve never done what?',
  answers: [
    'Engaged in incest',
    'Fought a duel with deadly weapons',
    'Attended a communist gathering',
    'Viewed pornography'
  ],
  correctAnswer: 'Fought a duel with deadly weapons',
  backgroundImageClass: 'kentucky'
},
{
  question: 'A one year old bull has been loose in your town in Missouri for 3 days. You are now permitted to do what with the bull?',
  answers: [
    'Feed it and try to befriend it',
    'Rope it like a cowboy and add it to your herd',
    'Kill it',
    'Castrate it'
  ],
  correctAnswer: 'Castrate it',
  backgroundImageClass: 'missouri'
},
{
  question: 'Minnesota does not believe in fun. As such, they have outlawed what activity?',
  answers: [
    'Jousting',
    'Oiled-pig catching contests',
    'Dance parties involving more than 100 individuals',
    'bicycle races',
  ],
  correctAnswer: 'Oiled-pig catching contests',
  backgroundImageClass: 'minnesota'
},
];

function shuffleArray(arr) {
  let tempArr = Array.from(arr);
  let randomIndex;
  let shuffledArr = [];
  while (tempArr.length > 0) {
    randomIndex = Math.floor(Math.random() * tempArr.length);
    shuffledArr.push(tempArr[randomIndex]);
    tempArr.splice(randomIndex, 1);
  }
  return shuffledArr;
}

function populateDataTable(arr) {
  for (let i = 0; i < arr.length; i++) {
    currentTable.push(STORE[arr[i]])
  }
}