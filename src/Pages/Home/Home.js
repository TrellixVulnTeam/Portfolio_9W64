import React from 'react';
import './Home.scss';
import name from '../../assets/name.svg';
import astronaut from '../../assets/Astronaut.svg';

export default function Home() {
    return (
        <div className="container-home">
            <div className="text">
                <div className="welcome">
                    welcome to my website! I'm 
                </div>
                <div className="name">
                    <img className="name-img" src={name} alt="Kaili Ordiz"/>
                </div>
                <div className="descriptors">
                    product developer * UI/UX designer * 2D/3D game artist
                </div>
            </div>

            <div className="astronaut">
                <img className="astro-img" src={astronaut} alt="Astronaut"/>
            </div>

            <div className="footer">

            </div>

        </div>
    );
}
