import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Images
import hero1 from "../../assets/images/img@2x.png";
import iconarrow from "../../assets/images/icon/arrow-ic.svg";

class Section0 extends Component {
    render() {
        return (
            <React.Fragment>
    <section className="hero-1-bg position-relative bg-light d-flex align-items-center" id="home">
        <Container>
            <Row className="align-items-center">
                <Col lg={6}>
                    <div className="hero-title pr-lg-5">
          
                        <h1 className="future-bg">A Heaven on Earth Just  <span className="text-primary font-weight-medium">For You.</span></h1>
                        
                        <Link to="#" className="btn" Style="text-align: left;
                                        font: normal normal medium 20px/24px Lato;
                                        letter-spacing: 0px;
                                        color: #3E3A3B;
                                        text-transform: capitalize;
                                        opacity: 1;">Discover the trip <img src={iconarrow} alt="" height="21" /></Link>
                    </div>
 

                </Col>
                <Col lg={6}>
                    <div className="mt-5 mt-lg-0">
                        <img src={hero1} alt="" className="img-fluid mx-auto d-block"  />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
            </React.Fragment>
        );
    }
}

export default Section0;