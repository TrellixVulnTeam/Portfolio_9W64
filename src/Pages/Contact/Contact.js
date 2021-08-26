import React from 'react';
import './Contact.scss';
import emailjs from 'emailjs-com';
import phone from '../../assets/mobile.png';
import mail from '../../assets/mail.png';
import { AiFillLinkedin, AiFillInstagram, AiFillPhone } from 'react-icons/ai';
import { IoMail} from 'react-icons/io5';
import { ImLocation2} from 'react-icons/im';
import { CgAirplane} from 'react-icons/cg';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_jfsairo', 'template_uj75mwg', e.target, 'user_jiCQCpRIbnCqaj59wzM6L')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
      
    return (
        <div class="background">
            <div class="contact-container">
                <div class="contact-left">
                    <h2>get in touch!</h2>
                    <form class="contact-form" onSubmit={sendEmail}>
                    <div class="multiple-row">
                        <input type="text" placeholder="NAME" name="name" class="form-in"/>
                        <input type="email" placeholder="EMAIL" name="email" class="form-in"/>
                        <textarea placeholder="YOUR MESSAGE" name="message" class="form-in"></textarea>
                        <input type="submit" id="submit"/><label for="submit">submit</label>
                    </div>
                                
                    </form>
                </div>
                <div class="contact-right">
                    <h2>contact information</h2>
                    <div class="contact-info">
                        <div class="contact-info-row">
                        <AiFillPhone /><p> +46 70 814 3753 </p>
                        </div>
                        <div class="contact-info-row">
                        <IoMail /><p> kordiz@berkeley.edu </p>
                        </div>
                        <div class="contact-info-row">
                        <ImLocation2 /> <p>Currently located in Stockholm, Sweden</p>
                        </div>
                    </div>

                    <div class="social-links">
                    <a href="https://www.linkedin.com/in/kaili-ordiz/"><AiFillLinkedin /></a>
                    <a href="https://www.instagram.com/kailiio/"><AiFillInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
        


    );
}