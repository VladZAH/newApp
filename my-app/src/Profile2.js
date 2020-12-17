import React from 'react';

class Profile2 extends React.Component {
    render(){
        var style = {width: 200, minHeight: 100}
        return (
            <div>
                <div>{this.props.firstName}</div>
                <div>
                    <a><img style={style} src={this.props.imageURL}></img></a>
                </div>
            </div>          
        );
    }
}

export default Profile2;