import React from 'react';
import "./StarRating.css";

const setStars=review=>{
    var startArray=[];
    var key;
    for(var i=0;i<Math.round(review);i++){
    startArray.push(<img key={i} style={{display:"block",height:"20px",width:"21px",marginLeft:"1px"}} src="/images/goldstar.png" alt="Not Found"/>);
    }
    key=i+1;
    for(i=0;i<5-Math.round(review);i++){
        startArray.push(<img key={key++} style={{display:"block",height:"20px",width:"21px"}} src="/images/emptystar.png" alt="Not Found"/>);
    }
    return startArray;
}
const StarRating = ({review}) => {
    return ( <div style={{display:"flex",margin:"10px",width:"100%",alignItems:"center"}}>
        {
            setStars(review).map((star)=>{return star})
        }
        <span>{review} of 5</span>

    </div> );
}
 
export default StarRating;