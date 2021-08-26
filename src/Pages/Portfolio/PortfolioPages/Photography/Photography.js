import React from 'react';
import './Photography.scss';
import img1 from '../../../../assets/photos/IMG_0097.jpeg';
import img2 from '../../../../assets/photos/IMG_0351.JPG';
import img3 from '../../../../assets/photos/IMG_1265.JPG';
import img4 from '../../../../assets/photos/IMG_1403.JPG';
import img5 from '../../../../assets/photos/IMG_1956.jpeg';
import img6 from '../../../../assets/photos/IMG_2322.jpeg';
import img7 from '../../../../assets/photos/IMG_3131.JPG';
import img8 from '../../../../assets/photos/IMG_2353.JPG';
import img9 from '../../../../assets/photos/IMG_2793.jpeg';
import img10 from '../../../../assets/photos/IMG_3406.jpeg';
import img11 from '../../../../assets/photos/IMG_6469.JPG';
import img12 from '../../../../assets/photos/IMG_6470.JPG';
import img13 from '../../../../assets/photos/IMG_7421.jpeg';
import img14 from '../../../../assets/photos/IMG_9516.jpeg';
import img15 from '../../../../assets/photos/photography-bitmap-12.png';

export default function Photography() {
    return (
        <div class="photography-container">
            <div class="masonry">
                <div class="brick">
                    <img src={img1} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2021</div>
                        <div class="place">Sonoma, California</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img2} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2016</div>
                        <div class="place">Ammersee Lake near Utting, Germany</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img3} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2016</div>
                        <div class="place">The Catacombs of Paris, France</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img4} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2015</div>
                        <div class="place">Berkeley, California</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img5} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2018</div>
                        <div class="place">Lisbon, Portugal</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img6} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2018</div>
                        <div class="place">Serralves in Porto, Portugal</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img7} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2015</div>
                        <div class="place">Butchart Gardens Butterfly House in Victoria, British Columbia</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img8} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2015</div>
                        <div class="place">Santa Cruz Beach Bordwalk in Santa Cruz, California</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img9} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2018</div>
                        <div class="place">Manarola, Italy</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img10} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2018</div>
                        <div class="place">Vevey, Switzerland</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img11} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2016</div>
                        <div class="place">Montreux, Switzerland</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img12} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2016</div>
                        <div class="place">Montreux, Switzerland</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img13} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2019</div>
                        <div class="place">Snæfellsjökull National Park in Iceland</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img14} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2021</div>
                        <div class="place">Stockholm, Sweden</div>
                    </div>
                </div>
                <div class="brick">
                    <img src={img15} alt="" title="Cherry plant" />
                    <div class="description">
                        <div class="year">2015</div>
                        <div class="place">Berkeley, California</div>
                    </div>
                </div>
            </div>  
        </div>
    );
}
