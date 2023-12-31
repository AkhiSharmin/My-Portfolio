import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import bannerSvg from "../../../../assets/svg/bannerSvg.json";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner" id="home">
      <div className="banner-content p-24">
        <div className="md:flex justify-center items-center md:space-x-52 ">
          <div className="p-10" data-aos="zoom-in-up">
            <div>
              <p className="text-5xl">Hello I&#39;m,</p>
              <h2 className="banner-heading">Sharmin Akhi</h2>
              <h4 className="text-5xl">
                A{" "}
                <span className="banner-heading-sub">Creative Developer </span>
                From Bangladesh
              </h4>
              <div className="flex items-center space-x-5 mt-8">
                <button className="btn-main">About Me</button>
                <div className="flex items-center">
                  <Link to="https://www.facebook.com/profile.php?id=100010121712983">
                    <FaFacebook className="text-6xl text-[#0078f3] fa-icon" />
                  </Link>
                  <Link to="https://github.com/AkhiSharmin?tab=repositories">
                    <FaGithub className="text-6xl text-[#0078f3] mx-5 fa-icon" />
                  </Link>
                  <Link to="https://www.linkedin.com/in/sharmin-akhi-26a08b1b9/">
                    <FaLinkedin className="text-6xl rounded-full text-[#0078f3] fa-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10" data-aos="zoom-in-up">
            <div>
              <Lottie animationData={bannerSvg} loop={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
