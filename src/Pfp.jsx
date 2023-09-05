import React, {useState} from 'react'
import Sloth from './sloth.jpg'
import Styles from './Pfp.module.css'
import { useSpring, animated } from "react-spring";


function Pfp() {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.05)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
    borderRadius: "40%",
    height: "275px",
    width: "275px",
    marginTop: "70px",
    marginLeft: "60px"
  });

  return (
    <animated.div
      className = {Styles.Pfp} 
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={Sloth} 
        alt='Sloth' ></img>
    </animated.div>
  )
}

export default Pfp
