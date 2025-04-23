import React from "react";

export default function Caculation() {
  const numbers = [10, 10];
  function Sum(firstNumber, secondNumber) {
    let Sum = firstNumber + secondNumber;
    return Sum;
  }
  function Sub(firstNumber, secondNumber) {
    let Sub = firstNumber - secondNumber;
    return Sub;
  }
  function Multi(firstNumber, secondNumber) {
    let Multi = firstNumber * secondNumber;
    return Multi;
  }
  function Div(firstNumber, secondNumber) {
    let Div = firstNumber / secondNumber;
    return Div;
  }

  return (
    <>
      <p style={{ color: "blue" }}>Bai tap 02</p>
      <ul>
        <li>
          {numbers[0]} + {numbers[1]} = {Sum(numbers[0], numbers[1])}
        </li>
        <li>
          {numbers[0]} - {numbers[1]} = {Sub(numbers[0], numbers[1])}
        </li>
        <li>
          {numbers[0]} * {numbers[1]} = {Multi(numbers[0], numbers[1])}
        </li>
        <li>
          {numbers[0]}/{numbers[1]} = {Div(numbers[0], numbers[1])}
        </li>
      </ul>
    </>
  );
}
