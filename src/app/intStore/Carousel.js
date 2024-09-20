import React, { useState, useEffect } from "react";
import "../../components/Style/Carousel.scss";
import { HText, Numberinside } from "./StyledComponents";
import { I18n } from "aws-amplify/utils";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      texto: I18n.get("CarrouselT1"),
      autor: I18n.get("CarrouselTA1"),
    },
    {
      id: 2,
      texto: I18n.get("CarrouselT2"),
      autor: I18n.get("CarrouselTA1"),
    },
    {
      id: 3,
      texto: I18n.get("CarrouselT3"),
      autor: I18n.get("CarrouselTA1"),
    },
    {
      id: 4,
      texto: I18n.get("CarrouselT4"),
      autor: I18n.get("CarrouselTA1"),
    },
    {
      id: 5,
      texto: I18n.get("CarrouselT5"),
      autor: I18n.get("CarrouselTA1"),
    },
    {
      id: 6,
      texto: I18n.get("CarrouselT6"),
      autor: I18n.get("CarrouselTA1"),
    },
  ];

  const showItem = (index) => {
    if (index < 0) {
      setCurrentIndex(items.length - 1);
    } else if (index >= items.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextItem = () => {
    showItem(currentIndex + 1);
  };

  const prevItem = () => {
    showItem(currentIndex - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextItem();
    }, 5000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, [currentIndex]); // Se ejecutará cada vez que currentIndex cambie

  return (
    <div className="carousel-container-2">
      <div className="carousel-1">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="carousel-texts">
              <Numberinside>{item.texto}</Numberinside>
              <HText>{item.autor}</HText>
            </div>
          </div>
        ))}
      </div>
      <div className="dot-container">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => showItem(index)}
          ></span>
        ))}
      </div>
      <button className="prev-2" onClick={prevItem}>
        &#10094;
      </button>
      <button className="next-2" onClick={nextItem}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
