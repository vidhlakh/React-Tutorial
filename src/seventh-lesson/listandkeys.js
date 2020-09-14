import React from 'react'
const number = [1,2,3,4,5]
export const Square = number.map(num => {return num*num})
export function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }