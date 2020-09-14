import React from 'react';
import './App.css';
//import { render } from '@testing-library/react';
import {Welcome} from './second-lesson/renderElements'
import {Comment } from './third-lesson/comment'
import {Clock } from './fourth-lesson/clock'
import { Toggle } from './fifth-lesson/toggle';
import { Mailbox } from './sixth-lesson/conditional-rendering';
import { Page } from './sixth-lesson/WarningBanner'
import {Square } from './seventh-lesson/listandkeys'
import { NumberList } from './seventh-lesson/listandkeys'
import { NumberListwithProperKey } from './seventh-lesson/ProperKeyUsage'
import { NameForm } from './eighth-lesson/NameForm';
import EssayForm from './eighth-lesson/EssayForm';
import { FlavorForm } from './eighth-lesson/FlavorForm';
import { Reservation } from './eighth-lesson/Reservation';
import { Calculator } from './nineth-lesson/Calculator'
const name = 'Josh Perez';
// const element1 = React.createElement(
//   'p',
//   {className: 'greeting'},
//   'Hello, world 1!'
// );
// const element = (
//   <p className="greeting">
//     Hello, world!
//   </p>
// );
const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
const messages = ['React', 'Re: React', 'Re:Re: React'];
const numbers = [1, 2, 3, 4, 5];
function App() {

  return (
    <div>
      <h1>Hello, {name}</h1>
      <Welcome name="Vidhya" />
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
      <Clock />
      <Toggle />
      <Mailbox unreadMessages={messages} />
      <Page />
      {Square}
      <NumberList numbers={numbers} />
      < NumberListwithProperKey numbers={numbers} />
      <NameForm />
      <EssayForm /> 
      <FlavorForm />
      <Reservation /> 
      <Calculator />
      </div>
    );
  
};

export default App;
