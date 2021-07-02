import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootDiv = document.getElementById('root');
// const greeting = document.createElement('p');
// greeting.innerHTML = "Hello from react app.";

// const time = document.createElement('p');
// time.innerHTML = 'It is ' + (new Date()).toLocaleString;
// console.log(greeting);
// rootDiv.appendChild(greeting);
// rootDiv.appendChild(time);

// Function Based Components Name Must Be Capitalized.
const GreetingComponent = () => {
  return <h1>Hello from the React App.</h1>
}

// Class Based Components Name Must Be Capitalized.
class MyComponent extends React.Component {
  render() {
    return <h2>This is my component.</h2>
  }
}

const Greeting = (props) => {
  return (
    <div>
      <h1>Hello { props.name }, </h1>
      <h1>You are { props.age } years old.</h1>
    </div>
  )
}

const Post = (props) => {
  return (
    <div>
      <img src={ props.profileImage } alt="" />
      <p><strong>{ props.name }</strong></p>
      <p>{ props.text }</p>
      <button>Like</button>
      <button>Share</button>
    </div>
  )
}

ReactDOM.render(
  <div>
    <Post profileImage={"https://i.pravatar.cc/150?img=69"} name="John Doe" text={"This teacher sucks."} />
    <Post profileImage={"https://i.pravatar.cc/150?img=32"} name="Patricia Jones" text={"What's up, I'm Patricia."} />
    <Post profileImage={"https://i.pravatar.cc/150?img=64"} name="Homer Simp" text={"My name is Homer Simp but I ain't no simp."} />
  </div>,
  document.getElementById('root')
)

const myAge = 25;
const greeting = <p>Hello from react app</p>
const time = <p>It is { new Date().toLocaleTimeString() }</p>
const twoPlusTwo = <p>2 + 2 = { 2 + 2 }</p>
const olderThan18 = <p>Am I 18 years or older: { myAge >= 18 ? "yes" : "no" }</p>

setInterval(() => {
ReactDOM.render(
  <div>
    <GreetingComponent />
    <MyComponent />
    <Greeting name="Eric" age={25} />
    { greeting }
    { time }
    { twoPlusTwo }
    { olderThan18 }
  </div>,
  document.getElementById('root')
)
}, 1000)

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// NOTES:
// JSX Fragments