function AnimalCreator(username, species, tagline, noises,friends) {
  return { username: username, species: species, tagline: tagline, noises: noises, friends: friends || [] };
 };

var sheep = new AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);

var cow = new AnimalCreator('milie', 'cow', 'I\'m so big!', ['mooo', 'huh', 'munchmunch']);

var moose = new AnimalCreator('memoose', 'moose', 'I\'m so strong!', ['back', 'huh', 'munchmunch']);

function addFriend(animal, friend) {
  animal.friends.push(friend.username)
};

addFriend(moose, moose)
addFriend(cow, moose);
addFriend(sheep, cow);
addFriend(sheep, moose);

function myFarm(animal1, animal2, animal3) {
  return [animal1, animal2, animal3];
};

var animals = myFarm(cow, moose, sheep);

function addMatchesArray(animals) {
  for (var i = 0; i < animals.length; i++) {
    animals[i].matches = [];
  };
};

addMatchesArray(animals);
console.log(animals);
function giveMatchesArray(animals) {
  for (var i = 0; i < animals.length; i++) {
    animals[i].matches.push(animals[i].friends[0]);
  };
};

giveMatchesArray(animals);
//console.log(sheep);
console.log(animals);
