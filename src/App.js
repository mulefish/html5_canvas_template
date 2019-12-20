import React, { Component } from 'react';
let data = require('./fake.json');
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'constructor'
    }
  }

  componentDidMount(){

    const c = document.getElementById("background");
    const ctx = c.getContext("2d");
    ctx.moveTo(10, 10 );
    ctx.lineTo(100, 100);
    ctx.stroke();

    const c2 = document.getElementById("foreground");
    const ctx2 = c2.getContext("2d");
    ctx2.moveTo(200, 100);
    ctx2.lineTo(300, 200);
    ctx2.strokeStyle = "#000000";
    ctx2.lineWidth = 1;
    ctx2.stroke();


    console.log( data )


  }

  render() {
      const dimensions = {
        width: window.innerWidth + 'px',
        height: window.innerHeight * 0.61 + '500px'
      };
      return (
        <div className="viewport">
          <div className='wrapper' style={dimensions}>
            <canvas id='background' width={dimensions.width} height={dimensions.height} style={dimensions}></canvas>
            <canvas id='foreground' width={dimensions.width} height={dimensions.height} style={dimensions}></canvas>
          </div>
          <hr className='bar'/>
          {this.state.data}
    
        </div>
      );
  }
}

export default App;


/*
import React from 'react';

function App() {
  const dimensions = {
    width: window.innerWidth + 'px',
    height: window.innerHeight * 0.61 + '500px'
  };
  return (
    <div className="viewport">
      <div className='wrapper' style={dimensions}>
        <canvas id='background' style={dimensions}></canvas>
        <canvas id='foreground' style={dimensions}></canvas>
      </div>
      <hr className='bar'/>

    </div>
  );
}
export default App;
*/