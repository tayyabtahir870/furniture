import React from "react";
import sofa from "../Assests/sofa.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { RiArrowRightSFill } from "react-icons/ri";
import { MdOutlineChair } from "react-icons/md";
import { MdCleaningServices } from "react-icons/md";
import { IoBed } from "react-icons/io5";
import { PiOfficeChairFill } from "react-icons/pi";

const Heropage = () => {
  return (
    <div className="Heropage">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="sofa-text mt-5">
              Your Comfort <br /> Zone Begins <br /> With Furizen
            </h1>
            <p>
              Experience the Perfect Blend of Quality, Comfort, and <br />{" "}
              Design in Every Piece. We Guarantees to Revamp Your <br /> Space
              and Cater to Your Unique Taste and Lifestyle.
            </p>
            <button className="contactus-btn">
              Sign Up <GoArrowUpRight className="mt-1" color="white" />
            </button>
            <span className="d-inline-block" style={{ width: "10px" }}></span>
            <button className="collection-btn">
              Explore Collection <RiArrowRightSFill size={20} color="black" />
            </button>
          </div>

          <div className="col-md-6 mt-5">
            <img className="img-fluid sofa-img" src={sofa} alt="" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-5 first-col mb-5 ">
            <div className="p-3 ">
              <MdOutlineChair color="black" size={50} />
              <h5 className="mt-3">Authenic Craftsmanship</h5>
              <p>
                Celebrating the beauty of skilled <br /> artisan work.
              </p>
            </div>
            <div className="p-3 ">
              <MdCleaningServices color="black" size={50} />
              <h5 className="mt-3">Personalized Service</h5>
              <p>
                Committed to making your <br /> future shopping seamless.
              </p>
            </div>
          </div>
          &nbsp; 
          <div className="col-md-5 first-col mb-5 ">
            <div className="p-3 ">
              <PiOfficeChairFill color="black" size={50} />
              <h5 className="mt-3">Sustainable Practices</h5>
              <p>
               Advocating green living through <br /> eco-friendly furniture.
              </p>
            </div>
            <div className="p-3 ">
              <IoBed color="black" size={50} />
              <h5 className="mt-3">Inovative Design</h5>
              <p>
             Creating pieces that fuse style <br /> and functionality effortlessly.
              </p>
            </div>
          </div>
          <div className="col-md-1">
            <div className="arrow">
              <GoArrowUpRight  size={170} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
