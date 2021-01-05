import React, { Component } from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import ServiceBox from "./services-box";

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services : [
                { icon : "pe-7s-headphones service-icon", title : "Day 1", title2 : "Friday, 23 jan 2021",desc : "Et harum quidem rerum facilis expedita distinctio nam libero tempore cum quibusdam nobis." },
                { icon : "pe-7s-tools service-icon", title : "Day 2",title2 : "Saturday, 24 jan 2021", desc : "Et harum quidem rerum facilis expedita distinctio nam libero tempore cum quibusdam nobis." },
                { icon : "pe-7s-display1 service-icon", title : "Day 3",title2 : "Sunday, 25 jan 2021", desc : "Et harum quidem rerum facilis expedita distinctio nam libero tempore cum quibusdam nobis." },
                // { icon : "pe-7s-cup service-icon", title : "Goal Business", desc : "Et harum quidem rerum facilis expedita distinctio nam libero tempore cum quibusdam nobis." },
                // { icon : "pe-7s-light service-icon", title : "Branding Identity", desc : "Et harum quidem rerum facilis expedita distinctio nam libero tempore cum quibusdam nobis." },
                // { icon : "pe-7s-graph1 service-icon", title : "Dynamic Growth", desc : "Et harum quidem rerum facilis expedita distinctio nam libero tempore cum quibusdam nobis." },
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="section" id="services">
                    <Container>
                        <SectionTitle
                            title1="Our "
                            title2="Trip Program"
                            
                        />

                        <Row>
                            <ServiceBox services={this.state.services} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Service;