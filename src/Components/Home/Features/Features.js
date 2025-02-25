import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-time">
      <div className="row">
        <div className="col-xl-3 timing">
          <h1 className="clock">
            <i class="fa-regular fa-clock"></i>
          </h1>
          <h5>Opening Hours Come Visit</h5>
          <h6>Mon: 10:30am - 7:00pm</h6>
          <h6>Tue: 10:30am - 7:00pm</h6>
          <h6>Thu: 10:30am - 7:00pm</h6>
          <h6>Fri: 10:30am - 7:00pm</h6>
          <h6>Sat: 10:30am - 7:00pm</h6>
          <h6>Sun: 10:30am - 7:00pm</h6>
        </div>
        <div className="col-xl-9 feature-right">
          <div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner car-animal">
              <div class="carousel-item active">
                <img src="https://i.pinimg.com/originals/fa/83/29/fa83291deaa29bffd19130513c773b33.jpg" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Pet friendly Environment</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article5976.jpg" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Healthy food for pets</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.thesprucepets.com/thmb/chCNKNnq0dyFpNUn_O8SIJPUf2I=/5640x3355/filters:fill(auto,1)/cats-playing-in-living-room-845697720-3ca4c7c053154ed5b17a0cc9ddd2cbd1.jpg"
                  alt=""
                  class="d-block w-100"
                />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Large playing area</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
