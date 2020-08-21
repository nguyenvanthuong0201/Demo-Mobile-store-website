import React, { Component } from 'react'

export default class Main_top extends Component {
    render() {
        return (
            <div>
                <div id="carouselId" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselId" data-slide-to="1"></li>
                        <li data-target="#carouselId" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="img-fluid" src="images/carousel1.png" style={{width:"100%",height:"600px"}} alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src="images/carousel2.png" style={{width:"100%",height:"600px"}} alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid" src="images/carousel3.png" style={{width:"100%",height:"600px"}}  alt="Third slide"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )
    }
}
