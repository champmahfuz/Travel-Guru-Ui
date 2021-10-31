import React from 'react';
import Album from '../Album/Album';
import './Albums.css';


const albums = [
    {
        img: 'https://i.ibb.co/GQbkyJ7/alnum1.webp',
        name: 'Coxs-bazar,Bangladesh',

    },
    {
        img: 'https://i.ibb.co/nwfwkt3/album2.webp',
        name: 'Dhaka,Bangladesh',

    },
    {
        img: 'https://i.ibb.co/B20P9mF/album3.webp',
        name: 'Shylet,Bangladesh',

    },
    {
        img: 'https://i.ibb.co/jktDGpq/package7.webp',
        name: 'Meghalaya,India',

    },
    {
        img: 'https://i.ibb.co/tHvqL7f/album5.jpg',
        name: 'Torento,Canada',

    },
    {
        img: 'https://i.ibb.co/NmCNwFh/package9.webp',
        name: 'Bern,Switzerland',

    },
    {
        img: 'https://i.ibb.co/qjp0LKX/album7.jpg',
        name: 'Amazon,Brasil',

    },
    {
        img: 'https://i.ibb.co/L0Z9CvL/album8.jpg',
        name: 'Kashirmir, India',

    },
    {
        img: 'https://i.ibb.co/RQVQKj1/album9.jpg',
        name: 'Fuziama,Japan',

    }



]




const Albums = () => {
    return (
        <div id="albums" className="container">
            <h2 className="text-primary mt-5">Gallery</h2>
            <div className="row">

                {
                    albums.map(album => <Album
                        key={album.name}
                        album={album}
                    ></Album>)
                }

            </div>

        </div>
    );
};

export default Albums;