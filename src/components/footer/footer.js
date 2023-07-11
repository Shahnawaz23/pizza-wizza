import React from "react";
import { FaFacebook,FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import './footer.css';

function Footer() {
    return (
      <div className="footer-container">
        <div className="icons">
          <a
            className="fafacebook faicon"
            href="https://www.facebook.com/profile.php?id=100008635533518"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="faicon"
            href="https://www.instagram.com/shahnawaz__imteyaz/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="faicon"
            href="https://www.threads.net/@shahnawaz__imteyaz"
            target="_blank"
            rel="noreferrer"
          >
            Threads
          </a>
          <a
            className="faicon"
            href="https://twitter.com/shahnwazimteyaz"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="faicon"
            href="https://www.linkedin.com/in/shahnawaz-akhtar-65a449191/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="faicon"
            href="https://github.com/Shahnawaz23"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div id="copy">&copy; All Copyrights Reserved 2023</div>
      </div>
    );
}

export default Footer;