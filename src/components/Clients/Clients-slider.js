import React, { Component } from 'react';
import { Media } from "reactstrap";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TeamBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        }
    }
    
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
          };
        return (
            <React.Fragment>
               
            </React.Fragment>
        );
    }
}

export default TeamBox;