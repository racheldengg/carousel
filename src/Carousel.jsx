import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import React from 'react'
import Card from "./Card";

export default function Carroussel(props) {
  var [popupIndex, setPopupIndex] = useState([false, false, false, false, false]);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [popupSlide, setPopupSlide] = useState([true, false, false, false, false])
  const [goToSlide, setGoToSlide] = useState(null);
  const [closePopup, setClosePopup] = useState(false)

  
  const handleCardClose = () => {
  };

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  return (
    <div style={{ width: props.width, height: props.height, margin: props.margin }}>
      <Carousel
        slides={props.cards.map((element, index) => ({
          content: (
            <Card
              key={element.key}
              imagen={element.content.props.imagen}
              title={element.content.props.title}
              popupOpen={popupIndex[index]}
            />
          ),
          onClick: () => {
              console.log('on click')

              setGoToSlide(index);
              setPopupIndex([false, false, false, false, false])// resets everything on new card so nothing pops up

              if (popupIndex[index]) {
                setPopupIndex([false, false, false, false, false])
              } else {
                if (popupSlide[index]) { // popup on the new slide on second click
                  setPopupIndex((prevIndex) => {
                    const newIndex = [false, false, false, false, false]
                    newIndex[index] = true
                    return newIndex
                  })
                }

                setPopupSlide((previousSlide) => { // sets the slide that can be popped up
                  const newSlide = [false, false, false, false, false];
                  newSlide[index] = true;
                  return newSlide
                })
              }        
          },


        }))}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
