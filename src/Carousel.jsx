import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import React from 'react'

export default function Carroussel(props, { closePopup }) {
  const [popupIndex, setPopupIndex] = useState([true, false, false, false, false])
  const table = props.cards.map((element, index) => {
    return { ...element,
      onClick: () => {
        setGoToSlide(index);
        setPopupIndex(prevPopupIndex => {
          if (prevPopupIndex[index]) {
            setCards((prevCards) => {
              const newCards = [...prevCards]; // Create a copy of the state array
              newCards[index] = {
                ...newCards[index], // Create a copy of the specific card object
                content: {
                  ...newCards[index].content, // Create a copy of the content object
                  props: {
                    ...newCards[index].content.props, // Create a copy of the props object
                    popupOpen: true // Update the popupOpen property
                  }
                }
              };
              // console.log(newCards)
              return newCards;
            });
          }
          var newPopupIndex = [false, false, false, false, false];
          newPopupIndex[index] = true;
          return newPopupIndex
        });
      },
      customButtonClick: () => {
        console.log(`Custom button clicked for card ${index}`);
        handleCarouselFunction(); // Trigger the function in Carousel.jsx
      }
    };
  });


  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards, setCards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);


  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
        closePopup={closePopup}
      />
    </div>
  );
}
