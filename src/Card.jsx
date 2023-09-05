import Styles from "./Card.module.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import Popup from "./Popup";

function Card(props) {
  console.log(props)
  const [show, setShown] = useState(false);
  let imagen = props.imagen
  let title = props.title
  let popupOpen = props.popupOpen
  let summary = props.summary

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

// { imagen, title, popupOpen, summary }
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2 className={Styles.title} >{title}</h2>
      <p>
        {summary}
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
