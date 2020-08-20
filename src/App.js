import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Component/view/Post'


let obj={
  createdBy: 'Somebody name',
avatar: 'Somebody profile picture url',
description: "I'm not feeling good today!",
images: ['something.com/abc.jpg', "something.com/xyz.jpg"],
createdAt: Date.now(),
likes: ["list of user names for now"],
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Post postData={obj}/>
      </header>
    </div>
  );
}

export default App;
