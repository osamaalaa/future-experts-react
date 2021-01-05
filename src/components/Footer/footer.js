import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Import Footer link
import FooterLinks from "./footer-links";

//Import Logo
import logodark from "../../assets/images/footer-logo.svg";
import SectionTitle from "../common/section-title";
class Footer extends Component {
    state = {
        links : [
            { id : 1, title : "",
              child : [
                  { title : "Home", link : "/" },
                  { title : "Trip infomation", link : "/" },
                  { title : "Trip Programs", link : "/" },
                  { title : "About", link : "/" },
                 
              ]
            },
            { id : 2, title : "",
              child : [
                  { title : "Contact", link : "/" },
                  { title : "Blog", link : "/" },
                  { title : "Terms and condition", link : "/" },
                  { title : "privacy policy", link : "/" },
              ]
            },
        ],
    }
    render() {
        return (
            <React.Fragment>
                <section className="footer">
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <div className="mb-4">
                                    <Link to="/"><img src={logodark} alt="" className="logo-dark" height="60" /></Link>
                                    {/* <p className="text-muted mt-4 mb-2">Yourcompanyemailid@gmail.com</p>
                                    <h6 className="text-muted font-weight-normal">+00 1234-5678-90</h6> */}
                                    <ul className="list-unstyled footer-social-list mt-4">
                                            <li className="list-inline-item"><Link to="#"><i className="mdi mdi-facebook"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#"><i className="mdi mdi-instagram"></i></Link></li>
                                            <li className="list-inline-item"><Link to="#"><i className="mdi mdi-linkedin"></i></Link></li>
                                        </ul>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <Row>
                                    {
                                        this.state.links.map((link, key) =>
                                            <Col key={key} md={4}>
                                                <h6 className="footer-list-title text-dark mb-3">{link.title}</h6>
                                                <ul className="list-unstyled company-sub-menu">
                                                    {
                                                        link.child.map((fLink, key) =>
                                                            <li key={key}><Link to={fLink.link}>{fLink.title}</Link></li>
                                                        )
                                                    }
                                                </ul>
                                            </Col>
                                        )
                                    }
                                    
                                    <Col md={4}>
                                    <SectionTitle
                            title1="CallUs "
                            title2="19 509"
                            // desc="Call us at 19 509"
                        />
                                       
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        {/* Render footer links */}
                        <FooterLinks/>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Footer;