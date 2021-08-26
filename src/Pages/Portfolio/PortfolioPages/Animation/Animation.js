import React from 'react';
import {useState} from 'react';
import PropTypes from "prop-types";
import './Animation.scss';

export default function Animation() {
    //let videos = ["xLYLzTDJH44", "xOpdRtrPk8M", "NirUBEVye3c"];
    //[LeapFrog!,The Good, The Dab, and The Ugly,TIMELESS]
    const videos = [{"name":"LeapFrog!",
                    "description": "blah",
                    "code": "xLYLzTDJH44"},
                    {"name":"The Good, The Dab, and The Ugly",
                    "description": "blah",
                    "code": "xOpdRtrPk8M"},
                    {"name":"TIMELESS",
                    "description": "blah",
                    "code": "NirUBEVye3c"}];
    const [displayVideo, setVideo] = useState(videos[0]);
    return (
        
        <div class="animation-container">
                        <div class="demo-reel-description">
                <div class="big">Demo Reel</div>
                <div class="small">Features models I have created in Maya for the short films below.</div>
            </div>
            <div class="demo-reel-video">
                <div className="video-responsive">
                    <iframe
                        src="https://www.youtube.com/embed/deERRRbdaOo" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen/>
                </div>
            </div>



            <div class="short-film-videos">
                <div class="radios">
                    <div class="films-text">
                    Short Films
                    </div>
                    <div class="films-description">
                    These short films were a collaborative effort among four other people and myself while participating in the UC Berkeley Undergraduate Graphics Group (UCBUGG) animation workshop.
                    </div>
                    <div class = "wrappie">
                    {videos.map((result, i)=>(
                        <label class="rad-label">
                            <input type="radio" class="rad-input" value={result.name} checked={displayVideo === result} name="shortFilms" onChange={(e)=>setVideo(result)}/>
                            <div class="rad-design">
                            </div>
                            <div class="rad-text">
                                <span class="video-name">
                                    {result.name}
                                </span>
                            </div>
                        </label>
                        
                    ))}
                    </div>
                </div>
                <div class="videos">
                    <iframe 
                        src={`https://www.youtube.com/embed/${displayVideo.code}`} 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen/>
                </div>
            </div>  

            
    </div>
    );
}
