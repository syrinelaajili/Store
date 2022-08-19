import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/slider.css";

export default function Slider() {
  return (
    <div>
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-25 m-auto"
            src="https://cdn.shopify.com/s/files/1/2392/8713/products/bague-viking-fafnir-38146881716483_1200x.jpg?v=1655910379"
            alt="First slide"
          />
          <Carousel.Caption className="black">
           
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25 m-auto"
            src="https://cdn.shopify.com/s/files/1/2392/8713/products/bague-viking-chevaliere-38146831646979_1200x.jpg?v=1655911085"
            alt="Second slide"
          />

          <Carousel.Caption >
            
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-25 m-auto"
            src="https://cdn.shopify.com/s/files/1/2392/8713/products/bague-viking-marteau-de-thor-38146733080835_1200x.jpg?v=1655911987"
            alt="Third slide"
          />

          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="img-slider">
        <img src="https://cdn.shopify.com/s/files/1/2392/8713/files/Artboard_a80dfc1d-f262-4341-94c7-bc883d93a4e4_1600x.jpg?v=1646654682" alt="" />
      </div>
    </div>
  );
}
