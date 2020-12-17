import React from 'react';

    const Profile = (props) => {
        var style = {width: 200, minHeight: 100}
        return(
            <div>
                <div>{props.firstName}</div>
                <div>
                    <img style={style} src={props.imageURL}></img>
                </div>
            </div>
        );
    }

export default Profile;