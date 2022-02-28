const string =
  "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web";

const replacedString = string.replace("JavaScript", "Python");

console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");

console.log(replacedString2);

class Message {
  #show(val) {
    console.log(val);
  }
  get #add(val){
      ...
  }

}

const message = new Message();

message.show("hola");


const promise1 = new Promise((resolve,reject) => reject('1'))
const promise2 = new Promise((resolve,reject) => resolve('2'))
const promise3 = new Promise((resolve,reject) => resolve('3'))

Promise.any([promise1,promise2,promise3])
.then(res => console.log(res))


class anyClass {
    constructor(ele){
        this.ref = new WeakReaf(ele)
    }
    {...}
}

let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;

console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;

console.log(isTrue ??= isFalse);


// tc39 proximas versiones