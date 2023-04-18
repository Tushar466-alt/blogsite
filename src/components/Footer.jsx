import React from "react";
import "./Footer.css";

function Footer() {
  const menu = ["About Us", "Product", "Career", "Contact Us"];

  return (
    <>
      <div className="container footer pt-5 pb-5">
        <div className="row">
          <div className="col-lg-3 col-sm-12 text-center">
            <img className="logo" src="logo.png"></img>
          </div>
          <div className="col-lg-3 col-sm-12 px-5 footer-contact">
            <div className="row text-secondary">
              <div className="col-12 py-3">
                <span>Contact Us</span>
              </div>
              <div className="col-12 py-1">
                <p>
                  Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                  Market, XYZ-343434
                </p>
              </div>
              <div className="col-12 py-1">
                <p>example2020@gmail.com</p>
              </div>
              <div className="col-12 py-1">
                <p>(904) 443-0343</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 px-5">
            <div className="row">
              <div className="col-12 py-3">
                <span>More</span>
              </div>
            </div>
            <div className="col-12">
              {menu.map((item, ind) => {
                return (
                  <ul className="list-unstyled" key={ind}>
                    <li className="py-1">
                      <a
                        className="text-decoration-none text-secondary"
                        href="#"
                      >
                        {item}
                      </a>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 social">
            <div className="row">
            <div className="col-12 py-3">
                <span>Social Links</span>
              </div>
              <div className="col-12">
                <div className="icon">
                <img src="Instagram.png" />
                <img src="Twitter.png" />
                <img src="Facebook.png" />
                </div>
              </div>
              <div className="col-12 text-secondary food-truck">
                © 2022 Food Truck Example
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
