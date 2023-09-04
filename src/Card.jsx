import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import Popup from "./Popup";

function Card({ imagen, title, popupOpen }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p>
      {<Popup isOpen={popupOpen} >This is a popup content for {title} fjkdsla;jf;lsahg;lajfdl; fjdsaklfjdsa;l fjdskal;fjdskal; jdfskal;fjdks;ajfdksagjfds;ajg;sajfl;dsjal;k ghsal;fjdsal;kgha;jfdlk;sajlk; htla;jfuwi;eahfo;iwahnui;fjdsal;fjdsl;kajg jfdksla;fjk;dsla 
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>
        <body> fjdsail;gha;ljfl;dsajflksjda </body>

      </Popup>}
    </animated.div>
  );
}

export default Card;
