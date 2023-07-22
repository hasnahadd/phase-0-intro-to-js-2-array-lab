// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];
let x ='Ralph';
//add in the end
function destructivelyAppendCat(name) {
  cats.push(name);
}
//destructivelyAppendCat(x) ;
//console.log(cats)

//add in the begsin
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}
//last 
function destructivelyRemoveLastCat() {
  cats.pop();
}
//
function appendCat(name) {
  return cats.concat(name);
}
appendCat("Broom");
console.log(cats)
function prependCat(name) {
    return [name, ...cats];

}
//mn cats 0 htan m9bl akhira -1
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
//awl wehda y3ni mn godamha wa roh 
function removeFirstCat() {
  return cats.slice(1);
}




