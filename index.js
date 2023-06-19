//Завдання 1

/*let names = {
   first: "Tom",
   second: "Sam",
   third: "Ray",
   fourth: "Bob",
   fifth: "Name №5"
};

let {first: f, second: x, fifth:fifth} = names;

console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"*/


//Завдання 2

/*let data = {
   names: ["Sam", "Tom", "Ray", "Bob"],
   ages: [20, 24, 22, 26],
};

let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26*/

//Завдання 3

/*function mul(...arg) {
   let result = 1;
   let hasNumberParams = false;
 
   for (let param of arg) {
     if (typeof param === "number") {
       result *= param;
       hasNumberParams = true;
     }
   }
    return hasNumberParams ? result : 0;
 }
 
 console.log(mul(1, "str", 2, 3, true,5,'tt','ds',22,)); // 660
console.log(mul(null, "str", false, true)); // 0*/
 

//Завдання 4

/*let server = {
   data: 0,
   convertToString: function (callback) {
     callback(() => {
       return this.data + "";
     });
   }
 };
 
 let client = {
   server: server,
   result: "",
   calc: function (data) {
     this.server.data = data;
     this.server.convertToString(this.notification());
   },
   notification: function () {
     return (callback) => {
       this.result = callback();
     };
   }
 };
 
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"*/

//Завдання 5


function mapBuilder(keysArray, valuesArray) {
  if (keysArray.length !== valuesArray.length) {
    throw new Error('Length\'s error.');
  }
  
  const map = new Map();
  
  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i]);
  }
  
  return map;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);

console.log(map.size); // 4
console.log(map.get(2)); // "span"
 

//Завдання 6

/*const arr = [];

for (let i = 0; i <= 2; i++) {
   arr[i] = function () {
      console.log(i);
   };
}

arr[0](); // 0
arr[arr.length - 1](); // 2*/