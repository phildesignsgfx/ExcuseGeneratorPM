/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["a", "the"];
  let subject = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", " broke"];
  let posession = ["homework", "my toe", "my car", "my pen", "my coca cola"];
  let where = [
    "on the street",
    "in my house",
    " in my driveway",
    "in my castle",
    "in my porch"
  ];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let posIndx = Math.floor(Math.random() * posession.length);
  let whIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndx] +
    " " +
    action[actIndx] +
    " " +
    posession[posIndx] +
    " " +
    where[whIndx]
  );
};
