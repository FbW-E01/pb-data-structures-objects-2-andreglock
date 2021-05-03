const check = (object, number) => {
    if (number >= object.min && number <= object.max) {
        return true;
    } else {
        return false;
    }
};

console.log('1:', check({ min: 0, max: 5 }, 4));
console.log('1:', check({ min: 4, max: 5 }, 4));
console.log('1:', check({ min: 6, max: 10 }, 4));
console.log('1:', check({ min: 5, max: 5 }, 5));

const scrabbleMax = (...objects) => {
    let maxScore = 0;
    for (let i = 0; i < objects.length; i++) {
        maxScore += objects[i].score;
    }
    return maxScore;
}

console.log('2:', scrabbleMax( { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 }));

const isEmpty = (object) => {
    if (Object.keys(object).length > 0) {
        return true;
    } else {
        return false;
    }
}

console.log('3:', isEmpty({}));
console.log('3:', isEmpty({a: 1}));

const letterCount = (string) => {
    let array = string.split('');
    let object = {};
    for (let letter in array) {
        object[array[letter]] ? object[array[letter]]++ : object[array[letter]] = 1;
    }
    return object;
}

console.log('4:', letterCount('tree'));
console.log('4:', letterCount('Banana'));

const freeShipping = (object) => {
    let sum = 0;
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        sum += object[keys[i]];
    }
    if (sum > 50) {
        return true;
    } else {
        return false;
    }
};

console.log('5:', freeShipping({ "Sponge": 3.50, "Soap": 5.99 }));
console.log('5:', freeShipping({ "Surround Sound Equipment": 499.99 }));
console.log('5:', freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }));

const programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

console.log('6:', programming);

programming.languages.push('Go');
programming.difficulty = 7;
delete programming.jokes;
programming.isFun = true;

console.log('Languages:');
for (let i = 0; i < programming.languages.length; i++) {
    console.log('   ', programming.languages[i]);
};

keys = Object.keys(programming);

console.log('Keys:');
for (let key in keys) {
    console.log('   ', keys[key]);
};

console.log('Values:');
for (let key in keys) {
    console.log('   ', programming[keys[key]]);
};

programming.challengingRewarding = function() {
    if (this.isChallenging && this.isRewarding) {
        return true;
    } else {
        return false;
    }
};

console.log(programming.challengingRewarding());