import React from 'react';
import './About.scss';
import astronaut from '../../assets/Astronaut.svg';
import me from '../../assets/me2.jpeg';

export default function About() {
    return (
        <div className="container-about">
            <div className="about">
            <div className="about-text">
            <img className="me" src={me} alt="This is what I look like."/>
            🌿 Sustainability - there are a lot of us on earth. Being mindful of our impact on the environment, and consequently other humans, can ensure a safe environment for generations. <br />
            <br />
🌎 At every opportunity, I act with purpose because even small actions can have a great impact. For example, I create artwork not only as reflections of my inner emotions and thoughts, but also to evoke positive change among observers.<br />
<br />
🔬 The passing of my dad has shown me both the capabilities of modern medicine and the shortcomings. I am passionate about working to advance technology, namely modeling techniques, for the eventual advancement of modern medicine.

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