// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = (name) => drivers.push(name);
const destructivelyPrependDriver = (name) => drivers.unshift(name);
const destructivelyRemoveLastDriver = () => drivers.pop();
const destructivelyRemoveFirstDriver = () => drivers.shift();

const appendDriver = (name) => [...drivers, name];
const prependDriver = (name) => [name, ...drivers];

const removeLastDriver = () => drivers.slice(0, drivers.length - 1)
const removeFirstDriver= () => drivers.slice(1)