import React from 'react';
import rock from "../images/rock.jpg";
import paper from "../images/paper.jpg";
import scissors from "../images/scissors.jpg";

class Game extends React.Component {
    constructor(props){
        super(props);
      }

    render(){
        var style = {width: 400, height: 400};
        let cmpchoice
        if(this.props.cimage === "rock"){
            cmpchoice = rock;
        }else if(this.props.cimage === "paper"){
            cmpchoice = paper;
        }else if (this.props.cimage === "scissors"){
            cmpchoice = scissors;
        }        
        let yourchoice
        if(this.props.yourimage === "rock"){
            yourchoice = rock;
        }else if(this.props.yourimage === "paper"){
            yourchoice = paper;
        }else if(this.props.yourimage === "scissors"){
            yourchoice = scissors;
        }
        return (
            <div>
                <div display="inline">
                    <img src={yourchoice} style={style}></img>
                    <img src={cmpchoice} style={style}></img>
                </div>
            </div>
        );
    }
}

export default Game;