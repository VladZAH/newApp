import React from 'react';

class StopWatch extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
          seconds: 0,
          minutes: 0,
          mins: "00",
          secs: "00",
          text: "PAUSE",
          display: "inline",
          color: "white"
        }
    }

    startStop = null;
    timer = () => {
            if (this.state.seconds === 59){
                this.setState({seconds: -1, minutes: this.state.minutes + 1});
            }
            if (this.state.minutes === 60){
                this.setState({minutes: 0})
            }
            let colors = ['red', 'orange', 'blue', 'yellow', 'green', 'indigo', 'violet'];
            let random = Math.floor(Math.random() * 7);
            let clr = colors[random];
            this.setState({seconds: this.state.seconds + 1, color: clr}); 
            let mins = (this.state.minutes < 10) ? ('0' + this.state.minutes) : this.state.minutes; 
            let secs = (this.state.seconds < 10) ? ('0' + this.state.seconds) : this.state.seconds;
            this.setState({mins: mins, secs: secs});    
    };
    
    componentDidMount(){
        this.startStop = setInterval(this.timer, 1000);
    }


    handleClick = this.handleClick.bind(this);
    handleClick() {
        if(this.state.text === "START"){
            this.startStop = setInterval(this.timer, 1000);
            this.setState({text: "PAUSE", display: "inline"});
        }else{
            clearInterval(this.startStop);
            this.setState({text: "START"});
        }
    };
   
    handleReset = this.handleReset.bind(this);
    handleReset() {
        this.setState({display: "none", text: "START", minutes: 0, seconds: 0, mins: "00", secs: "00"});
        clearInterval(this.startStop);
    }

    render(){
        
        return(
            <div>
                <p>{this.state.mins}:{this.state.secs}</p>
                <button style={{height: '50px', width: '200px', backgroundColor: 'gainsboro', fontSize: '30px'}} onClick={this.handleClick}><strong>{this.state.text}</strong></button>
                <button onClick={this.handleReset} style={{display: this.state.display, height: '50px', width: '200px', backgroundColor: 'gainsboro', fontSize: '30px'}}><strong>RESET</strong></button>
                <p style={{color: this.state.color}}>by Vlad Zahorodnyy</p>
            </div>
        );
    }
}

export default StopWatch;