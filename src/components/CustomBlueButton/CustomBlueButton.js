import React from 'react';
const CustomBlueButton = ({text,onClick}) => {
    return (<button style={{background:"#FFF200 0% 0% no-repeat padding-box"}} className="customButton" onClick={onClick}><span style={{color:"black" ,fontSize:"1vw"}}>{text}</span></button>  );
}
 
export default CustomBlueButton;