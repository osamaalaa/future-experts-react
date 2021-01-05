import React, { Component } from 'react';
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

class ServiceBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.services.map((service, key) =>
                        <Col key={key} lg={4} md={6}>
                            <div className="">
                                {/* <div className="mb-5">
                                    <i className={service.icon}></i>
                                </div> */}
                                <h3 className="service-title text-dark font-weight-normal pt-1 mb-4">{service.title}</h3>
                                <h5 className="service-title text-dark font-weight-normal pt-1 mb-4" Style="margin-top: -22px;">{service.title2}</h5>
                                <p className="text-muted service-subtitle mb-4">{service.desc}</p>
                                {/* <Link to="#" className="read-more-icon"><span className="right-icon">&#8594;</span></Link> */}
                            </div>
                        </Col>
                    )
                }        
            </React.Fragment>
        );
    }
}

export default ServiceBox;