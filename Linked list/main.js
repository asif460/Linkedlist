const LinkedList = require('./LinkedList');

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

console.log("Size:", list.size()); // 6
console.log("Head:", list.getHead().value); // "dog"
console.log("Tail:", list.getTail().value); // "turtle"
console.log("At index 2:", list.at(2).value); // "parrot"
console.log("Contains 'cat'?", list.contains("cat")); // true
console.log("Index of 'hamster':", list.find("hamster")); // 3

list.pop();
console.log("After pop:", list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> null

list.insertAt("rabbit", 3);
console.log("After insertAt(3, 'rabbit'):", list.toString()); // ( dog ) -> ( cat ) -> ( parrot ) -> ( rabbit ) -> ( hamster ) -> ( snake ) -> null

list.removeAt(1);
console.log("After removeAt(1):", list.toString()); // ( dog ) -> ( parrot ) -> ( rabbit ) -> ( hamster ) -> ( snake ) -> null