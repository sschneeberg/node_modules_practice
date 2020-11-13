const favoriteFood = require('./myModule.js');

const classNames = require('classnames');

//from my own module
function listFood(foods) {
    for (let food of foods) {
        console.log(`${food} is one of my favorite foods`);
    }
}

listFood(favoriteFood);

//from classNames

const btnStyles = {
    loaded: "red",
    selected: "green",
    clickable: "black"
}
const states = {
    loaded: true,
    selected: false,
    clickable: true
}

const style = classNames.bind(btnStyles);

let classes = '';

function names2str(style) {
    classes = style(states)
    return classes
}

console.log(names2str(style));
states.selected = true;

console.log(names2str(style));

//lodash
// Load the full build.
const _ = require('lodash');
//random number generation
const randomArray = [1, 2, 3, 4, 5]
console.log(_.random(0, randomArray.length));
console.log(_.random(1.5, 12.8));

class Fruit {
    constructor(a, b, c, d) {
        this.best = a;
        this.better = b;
        this.great = c;
        this.good = d;
    }

    write() {
        console.log(this.best);
    }
}

const fruit = new Fruit('apple', 'peach', 'strawberry', 'pear');
//omitting information
console.log(_.omit(fruit, ['best']));

let fruit2 = Object.assign({}, fruit);
let fruit3 = _.cloneDeep(fruit);

function changeFruit(fruitArray) {
    fruitArray.best = 'banana';
    return fruitArray;
}
fruit3 = changeFruit(fruit3);
fruit2 = changeFruit(fruit2);

console.log('deep copy: ');
fruit.write();
fruit3.write();
//this will throw and error because shallow copies don't have methods
//console.log('shallow: '); fruit.write(); fruit2.write();


//is Number

const isNumber = require('is-number');

function checkIsNumber(array) {
    for (i = 0; i < array.length; i++)
        console.log(isNumber(array[i]));
}

const toCheck = [1, [2], '2', NaN, '24ad', 'two', Infinity, '5e3', 1.4]

checkIsNumber(toCheck);
console.log(true, false, true, false, false, false, true, true, true)

//node fetch
const fetch = require('node-fetch');

const nodeFetch = (async() => {
    const response = await fetch('https://api.github.com/users/sschneeberg');
    const json = await response.json();
    console.log(json);
});

nodeFetch();