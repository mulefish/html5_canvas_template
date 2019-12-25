import { sortArray, getNextId,findXY_givenAngle_andDistance } from './utils.js';
import React, { Component } from 'react';
import 'typeface-roboto';
import MyOtherTable from "./MyOtherTable";
import Node from "./Node.js";
const json = require('./fake.json');

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    const c = document.getElementById("background");
    this.bg = c.getContext("2d");
    this.bg.font = "12px Arial";

    const c2 = document.getElementById("foreground");
    this.fg = c2.getContext("2d");

    let nodes = [] 
    let lookup = {}
    for ( let fileName in json ) {
      const ary = json[fileName]
      nodes.push(new Node(fileName, ary))
    }
    nodes = sortArray(nodes) // sort on number of 'out' edges
    nodes.forEach((node) => { 
      lookup[node.file] = getNextId()
      node.setId( lookup[node.file])      
    })

    this.setState({"data":nodes})        
    this.addPoints()


  }

  addPoints() { 
    this.bg.beginPath();  
    const cx = 200
    const cy = 200
    const radius = 50
    this.bg.arc(cx, cy, radius, 0, 2 * Math.PI);
    this.bg.stroke();

    let degree = 0 

    while ( degree < 359 ) {

      const xy = findXY_givenAngle_andDistance( cx, cy, degree, ( radius * 2 ) )
      this.bg.moveTo(cx, cy)
      this.bg.lineTo(xy.x, xy.y)
      this.bg.fillText(degree, xy.x, xy.y);
  

      degree += 10 
    } 



    this.bg.stroke();

  }


  choose(name) {
    alert(`hello, ${name}`);
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
 

        <MyOtherTable data={this.state.data}  />
 </div>
      );
  }
}

export default App;

