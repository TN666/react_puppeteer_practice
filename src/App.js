import React, { Component } from 'react';
class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      percent:"1%"
    }
  }

  changePercent(p){
    this.setState({percent:p})
  }

  delayChangePercent(p){
    setTimeout(function() {
      this.changePercent(p)
    }.bind(this), 5000)
  }

  controlButton() {
    var output=[];
    for(let i=25;i<=125;i+=25) {
      if (i === 125) {
        output.push(<button id="button-0" onClick={() => this.changePercent("0%")}>reset</button>);
        return output;
      }
      output.push(<button id={"button-"+i} onClick={() => this.changePercent(`${i}%`)}>{i}%</button>);
    }
    return output;
  }

  render(){
        return(
          <div>
            <div id="progress-back" className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"500px",height:"30px",borderRadius:"10px"}}>
              <div id="progress-bar" className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent,height:"100%",borderRadius:"10px"}}>{this.state.percent}</div>
            </div>
            { this.controlButton() }
            <div>
              <button id="delay-100" onClick={() => this.delayChangePercent("100%")}>delay100%</button>
            </div>
          </div>
        );
    }
  }
export default App;