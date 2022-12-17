"use strict";

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const diceİmage = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let diceScore0 = 0;
let diceScore1 = 0;
let totalScore0 = 0;
let totalScore1 = 0;

score0.textContent = 0;
score1.textContent = 0;
diceİmage.classList.add("hidden");
player1.classList.remove("player--active");

function addRemove0() {
  player0.classList.remove("player--active");
  player1.classList.add("player--active");
}
function addRemove1() {
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
}
function score0TextContent() {
  score0.textContent = diceScore0;
}
function score1TextContent() {
  score1.textContent = diceScore1;
}

btnRoll.addEventListener("click", function () {
  let diceRandom = Math.trunc(Math.random() * 6 + 1);
  if (player0.classList.contains("player--active")) {
    if (diceRandom !== 1) {
      diceScore0 += diceRandom;
      score0TextContent();
    } else {
      diceScore0 = 0;
      score0TextContent();
      addRemove0();
    }
  } else if (player1.classList.contains("player--active")) {
    if (diceRandom !== 1) {
      diceScore1 += diceRandom;
      score1TextContent();
    } else {
      diceScore1 = 0;
      score1TextContent();
      addRemove1();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (player0.classList.contains("player--active")) {
    totalScore0 += diceScore0;
    if (totalScore0 >= 60) {
      totalScore0 = 60;
      current0.textContent = 60;
      score0.textContent = "WON";
      btnHold.disabled = "true";
      btnRoll.disabled = "true";
    } else {
      diceScore0 = 0;
      score0TextContent();
      current0.textContent = totalScore0;
      addRemove0();
    }
  } else if (player1.classList.contains("player--active")) {
    if (totalScore1 >= 60) {
      totalScore0 = 60;
      current1.textContent = 60;
      score1.textContent = "WON";
      btnHold.disabled = "true";
      btnRoll.disabled = "true";
    } else {
      totalScore1 += diceScore1;
      diceScore1 = 0;
      score1TextContent();
      current1.textContent = totalScore1;
      addRemove1();
    }
  }
});
btnNew.addEventListener("click", function () {
  btnHold.disabled = false;
  btnRoll.disabled = false;
  diceScore0 = 0;
  diceScore1 = 0;
  totalScore0 = 0;
  totalScore1 = 0;
  score0TextContent(), score1TextContent();
  current0.textContent = "0";
  current1.textContent = "0";
});
