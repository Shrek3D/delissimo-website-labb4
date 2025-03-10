import React from "react";
import facebookLogo from "../images/facebook-logo.png";
import instagramLogo from "../images/instagram-logo.png";

function Footer() {
  return (
    <footer id="footer-restaurant-info">
      <div className="footer-container">
        {/* Öjersjö */}
        <div className="restaurant-block">
          <h3 id="footer-location-1">ÖJERSJÖ</h3>
          <p id="footer-phone-1">+4670 787 68 02</p>
          <p id="footer-hours-1">Sön-Tor 11-20, Fre-Lör 11-22</p>
          <a href="#" id="footer-address-1">
            Lars Göks Allé 1, 433 51 Öjersjö
          </a>
        </div>

        {/* Partille */}
        <div className="restaurant-block">
          <h3 id="footer-location-2">PARTILLE</h3>
          <p id="footer-phone-2">+4670 444 14 04</p>
          <p id="footer-hours-2">Mån-Tor 11-20, Fre-Sön 11-22</p>
          <a href="#" id="footer-address-2">
            Portgången 3, 433 38 Partille
          </a>
        </div>

        {/* Gamlestaden */}
        <div className="restaurant-block">
          <h3 id="footer-location-3">GAMLESTADEN</h3>
          <p id="footer-phone-3">+4670 339 36 56</p>
          <p id="footer-hours-3">Lör-Tor 11-20, Fre 11-22</p>
          <a href="#" id="footer-address-3">
            Gamlestads Torg 7, 415 12 Göteborg
          </a>
        </div>
      </div>

      {/* Sociala medier */}
      <div className="footer-social">
        <p id="footer-follow-us">Följ oss</p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/delissimo.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} alt="Facebook logo" />
          </a>
          <a
            href="https://www.instagram.com/delissimo.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} alt="Instagram logo" />
          </a>
        </div>
      </div>

      {/* copyright-bajs */}
      <p>&copy; 2025 Delissimo. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}

export default Footer;
