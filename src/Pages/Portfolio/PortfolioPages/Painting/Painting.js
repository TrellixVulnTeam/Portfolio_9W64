import React from 'react';
import './Painting.scss';
import painting1 from '../../../../assets/eye3.png';
import painting2 from '../../../../assets/tree.png';
import painting3 from '../../../../assets/small_plate.png';
import painting4 from '../../../../assets/large_plate.png';
import painting5 from '../../../../assets/heart.png';

export default function Painting() {
    return (
        <div class="painting-container">
            <div class="painting-masonry">
                <div class="painting-brick">
                    <img src={painting1} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">Eye</div>
                        <div class="place">Slightly surreal eye digitally painted in Adobe Photoshop.</div>
                    </div>
                </div>
                <div class="painting-brick">
                    <img src={painting5} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">Graduation Cap</div>
                        <div class="place">Pastel colors distinguish the components of an anatomical heart.</div>
                    </div>
                </div>
                <div class="painting-brick">
                    <img src={painting2} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">Tree</div>
                        <div class="place">Twisted bushy tree digitally painted in Adobe Photoshop.</div>
                    </div>
                </div>
                <div class="painting-brick">
                    <img src={painting4} alt="" title="Cherry plant" />
                    <div class="description">
                    <div class="year">Unfired Ceramic Plate</div>
                        <div class="place">Detailed design on a ceramic serving platter inspired by traditional Talavera style.</div>
                    </div>
                </div>
                <div class="painting-brick">
                    <img src={painting3} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">Unfired Ceramic Plate</div>
                        <div class="place">Various abstract geometric patterns on a ceramic plate.</div>
                    </div>
                </div>
                
            </div>  
        </div>
    );
}
