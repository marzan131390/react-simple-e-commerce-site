import React from 'react';
import './Manage.css';
import gift from '../../images/giphy.gif';
const Manage = () => {
    return (
        <div className="Managing-content">
            <h1>Congratulations!! You have successfully ordered your products</h1>
            <img src={gift} alt="" />
        </div>
    );
};

export default Manage;