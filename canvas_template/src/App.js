import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: 'constructor'
    }
  }

  getData(){
    setTimeout(() => {
      console.log('Our data is fetched');
      this.setState({
        data: 'componentDidMount'
      })
    }, 1000)
  }

  componentDidMount(){
    this.getData();
  }

  render() {

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