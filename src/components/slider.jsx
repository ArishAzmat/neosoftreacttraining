import React from 'react';

var slider1 = "images/slider1.jpg";
var height = {height:"500px"};
function Slider () {
        return ( <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} style={height} className="d-block w-100" alt="slider1"/>
          </div>
          <div className="carousel-item">
            <img src="images/slider2.jpg" style={height} className="d-block w-100" alt="slider2"/>
          </div>
          <div className="carousel-item">
            <img src="images/slider3.jpg" style={height} className="d-block w-100" alt="slider3"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div> ); 
}
 
export default Slider;