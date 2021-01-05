import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Images
import hero1 from "../../assets/images/img-two.png";

class Section extends Component {
    render() {
        return (
            <React.Fragment>
    <section className="hero-1-bg position-relative bg-light d-flex align-items-center" id="home-main">
        <Container>
            <Row className="align-items-center">
                <Col lg={6}>
                    <div className="hero-title pr-lg-5">
                    
                        <h1 className="hero-1-title mb-4 font-weight-normal line-height-1_4" Style="font: normal normal bold 40px/50px Merriweather;letter-spacing: 0px;color: #2A2526;text-transform: capitalize;opacity: 1;">Trip information</h1>
                        <p className="text-muted mb-4 pb-2">Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu, non posuere sem nulla in augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas mattis sapien vel sollicitudin blandit. Donec nec porttitor eros. Praesent blandit, erat non vehicula rutrum, mauris orci scelerisque urna, rutrum malesuada odio magna at felis. Fusce convallis elit in risus tincidunt ullamcorper.</p>
                        <Link to="#" className="btn" Style="width: 230px;height: 48px;background: #80C93D 0% 0% no-repeat padding-box; color: white;">Reserve now! <span className="ml-2 right-icon">&#8594;</span></Link>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mt-5 mt-lg-0">
                        <img src={hero1} alt="" className="img-fluid mx-auto d-block"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
            </React.Fragment>
        );
    }
}

export default Section;