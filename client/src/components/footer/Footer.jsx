import { NavLink } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { successMsg } from "../../services/feedbackService";
import "./footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const handleSubscribe = () => {
    successMsg("Subscription Successful!");
  };
  return (
    <div className="footer mt-3">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-sm-5 about">
            <img
              src="./images/logoFooter.png"
              alt="wanda Logo"
              className="logo"
            />
            <p>
              "Wanda" is an online jewelry store that offers exquisite designs
              and timeless elegance, catering to discerning tastes. Discover a
              captivating collection that combines craftsmanship with
              sophistication.
            </p>
          </div>
          <div className="col col-lg-2 col-sm-3">
            <h6 className="mt-4">Store</h6>
            <div className="d-flex desktopNav">
              <ul className="footerNav">
                <li>
                  <NavLink to={"/Watch"}>Watch</NavLink>
                </li>
                <li>
                  <NavLink to={"/Rings"}>Rings</NavLink>
                </li>
                <li>
                  <NavLink to={"/NewCollection"}>New Collection</NavLink>
                </li>
              </ul>
              <ul className="footerNav">
                <li>
                  <NavLink to={"/Bracelets"}>Bracelets</NavLink>
                </li>
                <li>
                  <NavLink to={"/Necklaces"}>Necklaces</NavLink>
                </li>
              </ul>
            </div>
            <div className="responsiveNav">
              <ul>
                <li>
                  <NavLink to={"/Watch"}>Watch</NavLink>
                </li>
                <li>
                  <NavLink to={"/Rings"}>Rings</NavLink>
                </li>
                <li>
                  <NavLink to={"/NewCollection"}>New Collection</NavLink>
                </li>
                <li>
                  <NavLink to={"/Bracelets"}>Bracelets</NavLink>
                </li>
                <li>
                  <NavLink to={"/Necklaces"}>Necklaces</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 subscribeBox">
            <h6 className="mt-4">Subscribe</h6>
            <p>Stay Updated with the Latest Products and Exclusive Sales</p>
            <div className="discover d-flex flex-grow-1">
              <span>
                <HiOutlineMail />
              </span>
              <input
                type="text"
                placeholder="Your Email"
                className="flex-grow-1"
              />
              <button className="discover" onClick={handleSubscribe}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr />
        <p className="rights">
          Designed and developed by Shay Yani. All rights reserved.{year} ©
        </p>
      </div>
    </div>
  );
};

export default Footer;
