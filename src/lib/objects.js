const createPerson = (name, age) => {
  const newObject = {
    'name': name,
    'age': age
  };
  return newObject;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

// Half done

const getAges = people => {
  let ages = [];
  for (i = 0; i < people.length; i++) {
    ages.push(people[i].age);
  }
  return ages;
};

const findByName = (name, people) => {
  for (i = 0; i < people.length; i++){
    if (people[i]['name'] === name) {
      return people[i];
    }
  }
};

const findHondas = cars => {
  let array = [];
  for (i = 0; i < cars.length; i++) {
    if (cars[i].manufacturer === 'Honda') {
      array.push(cars[i])
    }
  }
  return array;
};

const averageAge = people => {
  let tally = 0;
  for (i = 0; i < people.length; i++) {
    tally += people[i].age;
  }
  return tally / people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
