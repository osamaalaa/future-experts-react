import React, { Component } from 'react';
import { Container } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";
import FeatureBox from "./feature-box";

//Import Images
import feature1 from "../../assets/images/features/img-1.png";
import feature2 from "../../assets/images/features/featuress.png";
import feature3 from "../../assets/images/features/img-3.png";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features : [
                // {id : 1, img : feature1, icon : "mdi  mdi-laptop-mac", title : "Activity Reporting", desc : "Et harum quidem rerum facilise expedita distinctio nam libero tempore cum soluta nobis as eligendi optio cumque nihil quis nostrum exercitationem impedit minus omnis repellendus.", link : "/"},
                {id : 2, img : feature2, icon : "mdi  mdi-account-group", title : "About feature experts", desc : "Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet, finibus id turpis. Aliquam semper fringilla semper. Sed nec velit sit amet dolor pulvinar feugiat. Suspendisse blandit, nulla sed interdum egestas, nibh ex maximus arcu", link : "/"},
                // {id : 3, img : feature3, icon : "mdi  mdi-chart-bell-curve", title : "Marketing Analysis", desc : "At vero eos accusamus iusto odio soluta nobis est eligendi optio dignissimos ducimus qui blanditiis praesentium as voluptatum deleniti corrupti quos dolores molestias occaecati.", link : "/"},
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
            <section className="section" id="features">
                <Container>
                                {/* <SectionTitle
                                    title1="Our "
                                    title2="Features"
                                    desc="Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero pulvinar hendrerit id lorem."
                                /> */}

                            <FeatureBox features={this.state.features} />
                </Container>
            </section>
            </React.Fragment>
        );
    }
}

export default Features;