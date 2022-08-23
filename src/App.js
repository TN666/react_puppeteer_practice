import React, { Component } from 'react';
class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      percent:"0%"
    }
    this.changePercent=this.changePercent.bind(this);
  }

  changePercent(p){
    this.setState({percent:p})
  }

  controlButton() {
    var output=[];
    for(let i=25;i<=125;i+=25) {
      if (i === 125) {
        output.push(<button onClick={() => this.changePercent("0%")}>reset</button>);
        return output;
      }
      output.push(<button onClick={() => this.changePercent(`${i}%`)}>{i}%</button>);
    }
    return output;
  }

  render(){
        return(
          <div>
            <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"500px",height:"30px",borderRadius:"10px"}}>
              <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent,height:"100%",borderRadius:"10px"}}></div>
            </div>
            { this.controlButton() }
          </div>
        );
    }
  }
export default App;