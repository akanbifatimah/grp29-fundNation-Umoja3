import React from "react";
function Footer() {
  return (
    <div>
      <footer className="footer my-container mx-auto">
        <div className="footer-flex-container text-center text-md-left">
          <div className="flex-1">
            <img
              alt="zuri"
              className="footer-logo"
              src={"/kickstarter logo.png"} width='150px'
            />
          </div>

          <div className="flex-3">
            <h3>Links</h3>
            <a className="link" href="./">
              <p>Store</p>
            </a>
            <a className="link" href="./">
              <p>Blog</p>
            </a>
          </div>

          <div className="flex-4 address">
            <h3>Contact</h3>
            <p>
              18b Ozumba Mbadiwe, Victoria Island, <br />
              Lagos State
            </p>
            <p>
              <a className="link" href="mailto:hello@fundnation.com">
                hello@fundnation.team
              </a>
            </p>
          </div>

          <div className="flex-5">
            <h3>Follow Us</h3>
            <div className="contact-icons">
              <a
                className="link"
                target="_blank"
                href="./"
              >
                
                <img alt="" src="https://zuri.team/img/fb.png" />
              </a>
              <a
                className="link"
                target="_blank"
                href="./"
              >
            
                <img alt="" src="https://zuri.team/img/twitter.png" />
              </a>
              <a
                className="link"
                target="_blank"
                href="./"
              >
                
                <img alt="" src="https://zuri.team/img/IG.png" />
              </a>
              <a className="link" href="./">
                
                <img alt="" src="https://zuri.team/img/in.png" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <hr className="m-3 md-0" />
        </div>

        <div className="mx-auto text-center copyright">
          <p> &copy; 2022 FUNDNATION TEAM </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
