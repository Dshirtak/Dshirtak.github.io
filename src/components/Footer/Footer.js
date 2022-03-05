import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div id="footerContainer">
      <div className="middleContainer" style={{ display: "block" }}>
        <div id="footerRows">
          <div className="footerColumn" id="leftColumn">
            {" "}
            ;<img src="./images/yeshteryyellow.svg" alt="NotFound"></img>
            <span>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate
              <br />
              <br />
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed dia
              <br />
              <br />m nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit
            </span>
          </div>

          <div className="footerColumn" id="rightColumn">
            <span>Subscribe to our newsletter</span>
            <div id="mailInput">
              <input id="subscribeInput" placeholder="Enter Your Mail" />
              <button>Subscribe</button>
              <img src="./images/subscribe.svg" />
            </div>
            <div id="linksContainer">
              <div id="aboutSection">
                <ul style={{ listStyleType: "none" }}>
                  <li>
                    <a className="listLinks">About Us</a>
                  </li>
                  <li>
                    <a className="listLinks">Contact Us</a>
                  </li>
                  <li>
                    <a className="listLinks">Track Order</a>
                  </li>
                  <li>
                    <a className="listLinks">{"Terms & Conditions"}</a>
                  </li>
                  <li>
                    {" "}
                    <a className="listLinks">Privacy Policy</a>
                  </li>
                  <li>
                    {" "}
                    <a className="listLinks">Sell With Us</a>
                  </li>
                  <li>
                    {" "}
                    <a className="listLinks">Shipping And Returns</a>
                  </li>
                </ul>
              </div>
              <div style={{ width: "25%" }}>
                <ul style={{ listStyleType: "none" }}>
                  <li className="iconsContainer">
                    <img src="/images/facebook.svg" />
                    <span>/Yeshtery</span>
                  </li>
                  <li className="iconsContainer">
                    <img src="/images/linkedin.svg" />
                    <span>/Yeshtery</span>
                  </li>
                  <li className="iconsContainer">
                    <img src="/images/insta.svg" />
                    <span>/Yeshtery</span>
                  </li>
                  <li className="iconsContainer">
                    <img src="/images/twitter.svg" />
                    <span>/Yeshtery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr
          style={{
            width: "100%",
            marginTop: "20px",
            border: "0.25px solid rgb(134, 134, 134)",
          }}
          className="solid"
        ></hr>
        <div id="copyRightsContainer">
          <div id="copyLeftColumn">
            <span>© 2021 yeshtery, all rights reserved.</span>
          </div>
          <div style={{ flex: "1 1 0px" }}>
            <img
              className="middleCopyImages"
              style={{ width: "70px" }}
              src="./images/cashondelivery2x.png"
            />
            <img
              className="middleCopyImages"
              style={{ width: "45px" }}
              src="./images/visa2x.png"
            />
            <img
              className="middleCopyImages"
              style={{ width: "45px" }}
              src="./images/master2x.png"
            />
          </div>
          <div id="rightCopyColumn">
            <span>Powered By </span>
            <img style={{ marginLeft: "4px" }} src="./images/nasnav.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
