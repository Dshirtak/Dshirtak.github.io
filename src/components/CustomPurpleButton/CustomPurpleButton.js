import React from 'react';
const CustomPurpleButton = ({text,onClick}) => {
    return (<button className="customButton" onClick={onClick}><span style={{fontSize:"1vw"}}>{text}</span></button>  );
}
 
export default CustomPurpleButton;