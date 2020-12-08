import css from "./css/styles.css";
import "./fetchCountries/index.js";

// console.log(parseFloat("1e"));
// console.log(parseInt("1ee"));
// console.log(Number("1eee"));

// localStorage.getItem();
// localStorage.setItem();

let inputName = "Sasha";
let inputLastName = "Hrevtsova";
let age = 30;

localStorage.setItem("name", inputName);

// console.log(localStorage.getItem("name"));

const obj = {
  name: inputName,
  lastName: inputLastName,
  age,
};
localStorage.setItem("obj", JSON.stringify(obj));

function myFunc() {
  let name = "Sandra";
  let score = 0;

  function showName() {
    console.log(name);
  }

  function addScore(num) {
    score += num;
    return console.log(score);
  }

  function failScore(num) {
    score -= num;
    return console.log(score);
  }
  return { showName, addScore, failScore };
}


// let name = " Ziliboba";
// let score = 10;





let x = myFunc();
x.showName();
x.addScore(10);
x.failScore(50);

// console.log(name);
// console.log(score);

const A = {
  name: "Petya",
  score: 0,

  showName() {
    console.log(this.name);
  },
  addScore(num) {
    this.score += num;
    return console.log(this.score);
  },
  failScore(num) {
    this.score -= num;
    return console.log(this.score);
  },
};

A.showName();
A.addScore(100);
A.failScore(10);


class T{
  constructor(){
    //
  }
  add(){
    // 
  }
}