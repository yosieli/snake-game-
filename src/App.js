import React from 'react';
import logo from './logo.svg';
import Snake from './snake'
import Food from './food'

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}

class App extends React.Component {
  
  state = {
    food: getRandomCoordinates(),
    snakeDots: [
      [0,0],
      [0,2]
    ]
  }


  render(){

    return (
      <div className="App">
        <h1>Hello</h1>
        {/* <Snake/>
        <Food/> */}
      </div>
    );

  }
  
}

export default App;
