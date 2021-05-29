import React from "react";
import { faMapMarkerAlt, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './AboutUs.css';

function FooterComp(){
  return(
    <div className="footer">
    <footer className="bg-dark text-center text-white">
     <div className="row">
         <div className="col-sm-3">
             <p>Reach us at:</p>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
          
            <span>&nbsp;
            27 , N S Manikikar Marg, Duncan Causeway Road, Sion
            </span>
        </div>
         </div>

         <div className="col-sm-3">
             <p>Write to us at:</p>
             <div>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <span>
            <a href="mailto:animal@adoption.com">&nbsp;animal@adoption.com</a>
          </span>
        </div>
        </div>

         <div className="col-sm-3">
             <p>Contact us at:</p>
             <div>
             <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span>&nbsp;+91 4663536881</span>
        </div>
        
         </div>

         <div className="col-sm-3">
         <div className="footer-icons">
           <div>Connect with us at:</div>
          <a href="#facebook">
          <i className="fa fa-facebook"></i>
          </a> &nbsp;
          <a href="#twitter">
            <i className="fa fa-twitter"></i>
          </a> &nbsp;
          <a href="#instagram">
            <i className="fa fa-instagram"></i>
          </a> &nbsp;
          <a href="#linkedin">
            <i className="fa fa-linkedin"></i>
          </a> &nbsp;
          <a href="#youtube">
            <i className="fa fa-youtube"></i>
          </a> &nbsp;
        </div>
         </div>
     </div>
      
    </footer>
    </div>
  )
}

export default FooterComp;
