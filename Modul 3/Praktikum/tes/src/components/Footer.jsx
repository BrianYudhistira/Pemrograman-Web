import logo from "../Assets/logo-ilab.png";
import FB from "../Assets/logo-facebook.png";
import TWT from "../Assets/logo-twitter.png";
import IG from "../Assets/logo-instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="row h-100 footer-wrapper mb-4 mt-5">
        {/* Logo Ilab */}
        <div className="col-md-3 mt-5 col-xs-12 d-grid justify-content-center">
          <img
            src={logo}
            alt="logo-ilab"
            style={{ marginTop: "15%", height: "75px" }}
          />
          <p
            style={{
              marginTop: "20px",
              fontWeight: "lighter",
              fontSize: "12px",
            }}
          >
            Copyright © 2022. Infinite Learning
          </p>
        </div>

        {/* Services */}
        <div className="col-md-3 col-xs-12 d-grid justify-content-end">
          <h2 className="text-secondary">Services</h2>
          <h5>Email Marketing</h5>
          <h5>Campaign</h5>
          <h5>Branding</h5>
          <h5>Offline</h5>
        </div>

        {/* About */}
        <div className="col-md-3 col-xs-12 d-grid justify-content-center">
          <h2>About</h2>
          <h5>Our Story</h5>
          <h5>Benefits</h5>
          <h5>Team</h5>
          <h5>Careers</h5>
        </div>

        {/* Follow Us */}
        <div className="col-md-3 col-xs-12 d-grid justify-content-start">
          <h2 style={{ marginBottom: "-30px" }}>Follow Us</h2>
          <div className="d-flex top">
            <img
              src={FB}
              alt="logo-facebook"
              style={{
                width: "12px",
                height: "20px",
                marginRight: "12px",
                marginLeft: "6px",
              }}
            />
            <h4>Facebook</h4>
          </div>
          <div className="d-flex">
            <img
              src={TWT}
              alt="logo-twitter"
              style={{ width: "22px", height: "18px", marginRight: "5px" }}
            />
            <h4>Twitter</h4>
          </div>
          <div className="d-flex">
            <img
              src={IG}
              alt="logo-instagram"
              style={{ width: "21px", height: "21px", marginRight: "5px" }}
            />
            <h4>Instagram</h4>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-xs-12 d-flex justify-content-center"></div>
      <div className="row"></div>
    </footer>
  );
};
export default Footer;
