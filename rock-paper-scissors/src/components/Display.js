import React from 'react';
import rock from "../images/rock.jpg";
import paper from "../images/paper.jpg";
import scissors from "../images/scissors.jpg";

class Display extends React.Component {
    
    render(){
        let style = {width: 200, height: 200, border: '4px solid black', borderRadius: '50%'};
        let choice
        if(this.props.img === "rock"){
            choice = rock;
        }else if(this.props.img === "paper"){
            choice = paper;
        }else{
            choice = scissors;
        }
        return (
            <div style={{display: 'inline'}}>
                <img src={choice} style={style}></img>
            </div>
        );
    }
}

export default Display;