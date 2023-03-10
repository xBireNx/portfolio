import React from "react";
import {BsCloudLightningFill, BsFacebook} from "react-icons/bs";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai";
import {SiYoutubemusic} from "react-icons/si";
import {FiInstagram, FiMail, FiSend} from "react-icons/fi";
import { bannerImg } from "../../assets/index";

const Left = () => {
  return (
    <div className="w-5/12 h-full bg-bodyColor rounded-2xl">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg} loading='priority'
        />
      </div>
      <div className="w-full h-2/5 ">
        <div className="">
            <h1>Shashwat Biren</h1>
            <p>Web developer</p>
            <div>
                <span><FaGithub/></span>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Left;
