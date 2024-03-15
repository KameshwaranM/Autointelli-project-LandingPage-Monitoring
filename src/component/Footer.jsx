import React from "react";
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <p className="FooterStarted">Get Started For Free Today</p>
        <button className="FooterTry">Try Autointelli For Free</button>
        <button className="FoorterRequest">Request A Demo</button>
      </div>
      <div className="mainFooter">
        <div className="leftFooter">
          <img
            className="leftfooterImage"
            src={require("../assets/auto-intelli-logo.png")}
            alt="sss"
          />
          <div className="Rights">
            <h3 className="Copyrights">&#169; 2024 All Rights Reserved</h3>
            <div className="SocialIcon">
              <div className="Icons">
                <FaXTwitter className="TwitterIcon" />
              </div>

              <div className="Ficons">
                <TiSocialFacebook className="FacebookIcon" />
              </div>

              <div className="InstaIcon">
                <IoLogoInstagram className="InstagramIcon" />
              </div>
            </div>
          </div>
        </div>
        <div className="FooterList">
          <div className="FooterProduct">
            <h3 className="FooterHeading">Product</h3>
          </div>
          <div className="FooterLinkslist">
            <ul className="FooterLinks">
              <li>Features</li>
              <li>Integration</li>
              <li>Changelog</li>
              <li>Roadmap</li>
            </ul>
          </div>

          <div className="FooterCompany">
            <h3 className="FooterCompanyHeading">Company</h3>
            <ul className="FooterCompanyLinks">
              <li>About</li>
              <li>Pricing</li>
              <li>Terms Of Service</li>
              <li>Privacy Policy</li>
              <li>Licenced & Regulation</li>
            </ul>
          </div>
          <div className="FooterSupport">
            <h3 className="FooterSupportHeading">Support</h3>
            <ul className="FooterSupportLinks">
              <li>Sales</li>
              <li>FAQ</li>
              <li>Customer Care</li>
              <li>Get Help</li>
              <li>Try For Free</li>
              <li>Download</li>
            </ul>
          </div>
          <div className="FooterContact">
            <h3 className="FooterContactHeading">Contact Information</h3>
            <div className="FooterContactPhone">
              <MdOutlineWifiCalling3 className="FooterContactPhoneIcon" />
              <p className="PhoneNumber"> +91 ( 2345678905 )</p>
            </div>
            <div className="FooterContactEmail">
              <CiMail className="FooterContactEmailIcon" />
              <p className="FooterEmail">autointelli@gmail.com</p>
            </div>
            <div className="FooterContactLocation">
              <IoLocationOutline className="FooterContactMapIcon" />
              <p className="Location">Chennai,Tamil Nadu</p>
            </div>
          </div>

          <div className="HorizandleLine">
            <hr />
            <div className="TermService">
              <p>Term Of Services</p>
              <p>Policy Service</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
