import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carroussel from "./Carousel";
import { useState } from 'react'
import Popup from "./Popup";
// import { getPopupIndex } from "./Carousel";
import Pfp from "./Pfp";
import Icon from "./icons";
import {
  FaLinkedinIn,
  FaGithub,
  FaReact, 
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaPython,
} from "react-icons/fa";
import { 
  BiLogoGmail, 
  BiLogoMongodb
} from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { faJira } from '@fortawesome/free-brands-svg-icons';
import EnlargingText from "./EnlargeText";


function App(props) {
  const cards = [
      {
        key: uuidv4(),
        content: (
          <Card 
            imagen={"https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"}
            title={"Projects!" }
            popupOpen={null}
            summary={
              <>
                <span style={{ fontSize: "20px", fontFamily: "Raleway" }}>Currently exploring full-stack development, machine learning, and algorithmic design </span>{" "}
                <div style={{ fontSize: "20px", fontFamily: "Raleway" }}>Technologies I frequent:</div>{" "}
                <FaReact style={{ fontSize: "28px", marginBottom: "-5px", paddingLeft:"3px" }} />
                <FaNodeJs style={{ fontSize: "28px", marginBottom: "-5px", paddingLeft:"3px" }} />
                <FaHtml5 style={{ fontSize: "28px", marginBottom: "-5px", paddingLeft:"3px" }} />
                <FaCss3 style={{ fontSize: "28px", marginBottom: "-5px", paddingLeft:"3px" }} />
                <FaPython style={{ fontSize: "28px", marginBottom: "-5px", paddingLeft:"3px" }} />
                <BiLogoMongodb style={{ fontSize: "28px", marginBottom: "-5px", paddingLeft:"3px" }} />
                <FontAwesomeIcon icon={faJira} fontSize="28x" marginBottom="-5px" paddingLeft="3px" />

              </>
            }
            />
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card 
            imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" 
            title='1' 
            popupOpen={null}
            summary="Sloth does so many projects, including eating the potato and pooping out a potato and giving birth to potatoes" 
            />
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card 
            imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png"
            title='2' 
            popupOpen={null}
            summary="Sloth does so many projects, including eating the potato and pooping out a potato and giving birth to potatoes" />
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card 
            imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png"
            title='3'
            popupOpen={null}
            summary='Sloth does so many projects, including eating the potato and pooping out a potato and giving birth to potatoes'
            />
        )
      },
      {
        key: uuidv4(),
        content: (
          <Card 
            imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg"
            title='4'
            popupOpen={null}
            summary='Sloth does so many projects, including eating the potato and pooping out a potato and giving birth to potatoes'
            />
        )
      }
    ];

  return (
    <div>
     
    <div className="main" >
    <div className="main-left"> 
    <h1 className="header">
        <span className="animated-text">i</span>
        <span className="animated-text">t</span>
        <span className="animated-text">'</span>
        <span className="animated-text">s</span>
        <span className="animated-text">&nbsp;</span>
        <span className="animated-text">s</span>
        <span className="animated-text">o</span>
        <span className="animated-text">&nbsp;</span>
        <span className="animated-text">n</span>
        <span className="animated-text">i</span>
        <span className="animated-text">c</span>
        <span className="animated-text">e</span>
        <span className="animated-text">&nbsp;</span>
        <span className="animated-text">t</span>
        <span className="animated-text">o</span>
        <span className="animated-text">&nbsp;</span>
        <span className="animated-text">m</span>
        <span className="animated-text">e</span>
        <span className="animated-text">e</span>
        <span className="animated-text">t</span>
        <span className="animated-text">&nbsp;</span>
        <span className="animated-text">y</span>
        <span className="animated-text">o</span>
        <span className="animated-text">u</span>
        <span className="animated-text">&nbsp;</span>
        <span className="animated-text">:)</span>
      </h1>
      <div className="pfpandabout"> 
          <Pfp className="pfp"/>
          <div>
        <h1 id="aboutme"> hi, i'm sloth ! i am a <EnlargingText fontSize="32" text="third-year cs & math student"/>  @ uoft interested in <EnlargingText fontSize="32" text="slothing around"/> and <EnlargingText fontSize="32" text="sleeping"/>  </h1>
        <h1 id="aboutme"> i'm current seeking internships/co-ops for <EnlargingText fontSize="32" text="being a sloth"/></h1> 
        </div>
        <div className="icons">
              <Icon icon={<FaLinkedinIn />} fullLink="https://www.google.com" />
              <Icon icon={<FaGithub />} fullLink="www.google.com" />
              <Icon icon={<BiLogoGmail />} fullLink="www.google.com" />
        </div>
      </div>
      
      </div>
      <div className="main-right">
        <spacer></spacer>
        <Carroussel
            cards={cards}
            height="500px"
            width="30%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
      </div>
    </div>
    </div>
  );
}

export default App;
