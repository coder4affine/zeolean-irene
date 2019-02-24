// let concept
let x = 3;

{
  let y = 4;

  console.log(y);
}

{
  let y = 5;

  console.log(y);
}

console.log(x);

// const

const a = "a";

const c = { a: 1, b: 2 };

const d = [1, 2];

d[0] = 3;

c.b = 3;

console.log(d);

console.log(c);

// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <title>Page Title</title>
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <link rel="stylesheet" type="text/css" media="screen" href="main.css">
//     <script src="main.js"></script>
// </head>
// <body>

// </body>
// </html>

const html =
  "<!DOCTYPE html>\n" +
  "<html>\n" +
  "<head>\n" +
  '\t<meta charset="utf-8">\n' +
  '\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
  "\t<title>Page Title</title>\n" +
  '\t<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
  '<link rel="stylesheet" type="text/css" media="screen" href="main.css">\n' +
  '<script src="main.js"></script>' +
  "</head>" +
  "<body>" +
  "</body>" +
  "</html>";

const html1 = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="main.js"></script>
</head>
<body>
    
</body>
</html>
`;

const name = "Yagnesh Modh";

const greet = `Hello, ${name}`;

console.log(greet);

console.log(html1);

const a = 1;

const b = 2;

const x = {
  a: a,
  b: b,
  c: function() {
    return "hello";
  }
};

const y = {
  a,
  b,
  greet() {
    return "hello";
  }
};

console.log(x);

console.log(y.greet());

class Animal {
  constructor(type = "Animal") {
    this.type = type;
  }

  get type() {
    return this._type;
  }

  set type(val) {
    this._type = val.toUpperCase();
  }

  makeSound() {
    console.log("Animal");
  }
}

let a = new Animal();

console.log(a.type);
// console.log(a.makeSound());

class Cat extends Animal {
  constructor() {
    super("cat");
  }

  makeSound() {
    super.makeSound();
    console.log("Meow");
  }
}

let b = new Cat();

console.log(b.type);
console.log(b.makeSound());

const arr = [...Array(1000000).keys()];

console.time("for loop");

for (let index = 0; index < arr.length; index++) {}

console.timeEnd("for loop");

console.time("foreach loop");

arr.forEach(element => {});

console.timeEnd("foreach loop");

class Animal {
  constructor(type = "Animal") {
    this.type = type;
  }

  makeSound() {
    setTimeout(() => {
      console.log(this.type);
    }, 0);
    console.log(this.type);
  }
}

let a = new Animal();

console.log(a.makeSound());

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male",
    dob: "04081987"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "shikhar",
    gender: "male"
  }
];

const newUsers = users.map(item => {
  return { ...item, name: `Hello ${item.name}` };
});

console.log(users);

console.log(newUsers);

// const x  = { a: 1, b: 2};

// const y = {...x, b: 3}

// const z = Object.assign({}, x, { b: 3})

// console.log(x);

// console.log(y);

// console.log(z);

// const x = [1,2,3];
// const y = [...x, 4];

// console.log(x);
// console.log(y);

const x = { a: 1, b: 2 };

const y = { c: 3, d: 4 };

const z = { ...x, ...y };

console.log(z);

const xyz = (a, ...abc) => {
  console.log(abc);

  let sum = 0;
  for (let index = 0; index < abc.length; index++) {
    sum += abc[index];
  }
  return sum;
  // return a +b +c+ d+e+f;
};

console.log(xyz(1, 2, 3, 4, 5, 6, 7, 9, 10));

const p = { a: 1, b: 2, c: 3, d: 4 };
const { b, ...rest } = p;

console.log(b);
console.log(rest);

const user = {
  id: 1,
  name: "yagnesh",
  gender: "male",
  bod: "04081987",
  ssn: "123232"
};

const { id, ssn, ...rest1 } = user;

console.log(rest1);

const arr = [...Array(10).keys()];

console.time("for loop");

const newData = [];

for (let index = 0; index < arr.length; index++) {
  newData.push(arr[index]);
}

console.timeEnd("for loop");

console.log(newData);

console.time("foreach loop");

arr.forEach(element => {});

console.timeEnd("foreach loop");

console.time("map loop");

const mapData = arr.map(element => element);

console.timeEnd("map loop");

console.log(mapData);

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "rohit",
    gender: "male"
  },
  {
    name: "shikhar",
    gender: "male"
  }
];

const index = users.findIndex(item => item.name === "rohit");

const updatedRecord = users.find(x => x.name === "rohit");

console.log(updatedRecord);

// const updatedUsers = [...users.slice(0, index), ...users.slice(index + 1)];

// console.log(updatedUsers)

// const allUsers = [...users,  { name: 'raydu', gender: 'male'}];

// console.log(allUsers);

const arr = [1, 2, 3, 4, 5];

// let sum  = 0;

// for (let index = 0; index < arr.length; index++) {
//     sum +=  arr[index];
// }

// console.log(sum);

const sum = arr.reduce((previous, current) => {
  return previous + current;
}, 0);

console.log(sum);

const a = null;
const b = 10;

const c = a && b;

console.log(c);

// {
//     male: [{
//         name: 'yagnesh',
//         gender: 'male'
//     },
//     {
//         name: 'virat',
//         gender: 'male'
//     }],
//     female: [{
//         name: 'rani',
//         gender: 'female'
//     },
//     {
//         name: 'deepika',
//         gender: 'female'
//     }]
// }

// const male = 'Male'

// const ab = {
//     [male]: 'yagnesh'
// };

// console.log(ab);

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "rani",
    gender: "female"
  },
  {
    name: "deepika",
    gender: "female"
  }
];

const groupBy = (data, value) => {
  return data.reduce((previous, current) => {
    (previous[current[value]] = previous[current[value]] || []).push(current);
    return previous;
  }, {});
};

console.log(groupBy(users, "gender"));

const users = [
  {
    name: "yagnesh",
    gender: "male"
  },
  {
    name: "virat",
    gender: "male"
  },
  {
    name: "rani",
    gender: "female"
  },
  {
    name: "deepika",
    gender: "female"
  }
];

const a = users.reduce((p, c) => {
  if (c.name === "yagnesh" || c.name === "deepika") {
    return [...p, c];
  }
  return p;
}, []);

console.log(a);

// const arr = [1,2,3];

// console.log(arr.length);

// const newArr = arr.map(x => {
//     if(x % 2 === 0) {
//         return x * 2;
//     } else {
//         return x;
//     }
// });

// const newArr = arr.filter(x => x % 3 === 0);

// const newArr = arr.find(x => x % 1 === 0)

// console.log(newArr);

// for (const key in y) {
//     console.log(key);
//     console.log(y[key])
//     // if (object.hasOwnProperty(key)) {
//     //     const element = object[key];

//     // }
// }
const x = {
  a: 1,
  b: 2,
  c: 3
};

const y = [1, 2, 3];

for (const item of y) {
  console.log(item);
}

for (const [key, value] of Object.entries(x)) {
  console.log(key);
  console.log(value);
}
const prom1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("prom1");
  }, 3000);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("prom2");
  }, 2000);
});

const promAll = Promise.all([prom1, prom2])
  .then(x => console.log(x))
  .catch(err => console.log(err));

const promRace = Promise.race([prom1, prom2])
  .then(x => console.log(x))
  .catch(err => console.log(err));

import * as abc from "./es7";
import {} from "module";
import moduleName from "module";
