import React from "react";
import Image from "next/legacy/image";

export default function Hero(props) {
  return (
    
    <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
          <h1>{props.header}</h1>
          <h2>{props.description}</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          
          <Image src={props.image} alt="Hero Image" className="img-fluid animated" layout="responsive" width="780" height="646" />
        </div>
      </div>
    </div>

  </section>
  );
}
