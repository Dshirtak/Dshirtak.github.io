import React from 'react';
import './SecondSubHeader.css'
import "../Common.css";

const SecondSubHeader = () => {
    return (<div id="secondSubHeaderContainer">
        <div className='middleContainer' style={{flex:'7'}}>
            <span className="categories">Men</span>
            <span className="categories">Women</span>
            <span className="categories">Unisex</span>
            <span className="categories">Kids</span>
            <span className="categories">Best Sellers</span>
            <span className="categories">New Arrivals</span>
            <span className="categories" style={{color:'red'}}>Offers</span>
        </div>

    </div>  );
}
 
export default SecondSubHeader;