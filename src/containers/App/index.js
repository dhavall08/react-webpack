import React from 'react';
import flower from "../../assets/images/flower.jpg";
import('./App.css');

function App() {
  return (
    <React.StrictMode>
      <div className="mono"> 
        <h1>Hi!</h1>
        <h2>A minimum configuration of webpack.</h2>
        <p>A red flower:</p>
        <img src={flower} />
      </div>
    </React.StrictMode>
  )
}

export default App;