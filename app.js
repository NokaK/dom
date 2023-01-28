// console.log("test");
// function test(a) {
//   return a * a;
// }
// const test = (a) => {
//   const loweCase = a.toLowerCase();
//   return loweCase;
// };

// const num = test("test");
// console.log(num);

let personsArr = [
  {
    name: "ana",
    age: 30,
  },
  {
    name: "giorgi",
    age: 30,
  },
  {
    name: "levani",
    age: 30,
  },
];

const findArrPerson = (list, name) => {
  const findPerson = list.find((item) => item.name === name);
  return findPerson;
};

const firstName = "nino";
const person = findArrPerson(personsArr, firstName);

// if (person) {
//   return "persons is defined";
// } else {
//   return "persons is  not defined";
// }

const jan = 30;
const feb = 300;
const mar = 400;
const apr = 600;

const sumOfProfit = [jan, feb, mar, apr];

const getSum = () => {
  let sum = 0;
  for (let index = 0; index < sumOfProfit.length; index++) {
    const element = sumOfProfit[index];
    sum = sum + element;
    // return sum;
  }
  console.log(sum);
};

getSum();
