import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import {Welcome} from './second-lesson/renderElements'
import {Comment } from './third-lesson/comment'
import {Clock } from './fourth-lesson/clock'
import { Toggle } from './fifth-lesson/toggle';
const name = 'Josh Perez';
const element1 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world 1!'
);
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
function App() {

  return (
    <div>
      <h1>Hello, {name}</h1>
      <p> {element1}</p>
      <Welcome name="Vidhya" />
      <Welcome name="Lakshmi" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Clock />
      <Toggle />
      </div>
    );
  
};

export default App;
