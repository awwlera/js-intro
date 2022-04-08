let me = {
    name: "Valeriia",
    age: 27,
    city: "Kyiv",
    height: 163,
    weight: 51,
    nationality: "ukrainian",
    favNumber: 5,
}

let friend = {
    name: "Mariia",
    age: "30",
    city: "Kyiv",
    height: 182,
    weight: 64,
    nationality: "ukrainian",
    favNumber:"5",
}

console.log(me.name == friend.name); //false
console.log(me.name > friend.name); //true
console.log(me.age == friend.age); //false
console.log(me.age === friend.age); //false
console.log(me.city == friend.city);//true
console.log(me.favNumber !== friend.favNumber); //true