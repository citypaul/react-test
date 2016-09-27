// var name = 'My name';
//
// function Creature() {
//   this.name = name;
// }
//
// var instance = Creature();
//
// console.log(instance);

var myObject = {
  count: 0
}

function increaseCount(obj) {

    var originalCount = obj.count;
    return originalCount + 1;
}

var updated = increaseCount(myObject);


console.log('myObject: ', myObject.count);
console.log('updated: ', increaseCount(myObject));
