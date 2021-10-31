import React from 'react';
import './Album.css';

const Album = ({ album }) => {
    const { name, img } = album;
    return (
        <div className="col-lg-4 col-sm-6 col-12 image">
            <img src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Album;