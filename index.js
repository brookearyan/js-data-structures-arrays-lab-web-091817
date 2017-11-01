// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];


function appendDriver (name) {
  return [...drivers, name]
}

function prependDriver (name) {
  return [name, ...drivers]
}

function destructivelyAppendDriver (name) {
  drivers.push(name);
}

function destructivelyPrependDriver (name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver () {
  drivers.pop()
  return drivers;
}

function destructivelyRemoveFirstDriver () {
  drivers.shift()
  return drivers;
}

function removeFirstDriver () {
  return drivers.slice(1)
}

function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1)
}
