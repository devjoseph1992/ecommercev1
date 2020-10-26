import React from 'react';

import "./menu-item.style.scss";

const MenuItem = ({title, imageUrl, size}) => (
    <div style={{
        backgroundImage:`url(${imageUrl})`
    }} className= {`${size} menu-item `}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <spa className='subtitle'>SHOP NOW</spa>
        </div>
    </div>
)

export default MenuItem;