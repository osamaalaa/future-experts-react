import React, { Component, Suspense } from 'react';

const NavbarPage = React.lazy(() => import('../../components/Navbar/Navbar_Page'));
const Section0 = React.lazy(() => import('./Section0'));
const Section = React.lazy(() => import('./Section'));
const Service = React.lazy(() => import('../../components/Service/service'));
const About = React.lazy(() => import('../../components/About/about'));
const Feature = React.lazy(() => import('../../components/Features/feature'));
const Counter = React.lazy(() => import('../../components/Counter/counter'));
const Clients = React.lazy(() => import('../../components/Clients/Clients'));
const GetInTouch = React.lazy(() => import('../../components/GetInTouch/GetInTouch'));
const Subscribe = React.lazy(() => import('../../components/Subscribe/Subscribe'));
const Footer = React.lazy(() => import('../../components/Footer/footer'));


class Layout1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems : [
                { id: 1 , idnm : "home-main", navheading: "" },
                { id: 2 , idnm : "home", navheading: "Trip information" },
                { id: 3 , idnm : "services", navheading: "Trip Programs" },
                { id: 4 , idnm : "features", navheading: "About" },
                { id: 5 , idnm : "features", navheading: "blog" },
                { id: 6 , idnm : "clients", navheading: "Contact" },
            ],
            pos : document.documentElement.scrollTop,
            imglight : false,
            navClass : ""
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup=document.documentElement.scrollTop;
        if(scrollup > this.state.pos)
        {
            this.setState({navClass : "nav-sticky", imglight : false});
        }
        else
        {
            this.setState({navClass : "", imglight : false});
        }
    };

    Loader = () => {
        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="dot1"></div>
                        <div className="dot2"></div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <Suspense fallback = {this.Loader()} >

                    {/* Importing Navbar */}
                    <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} imglight={this.state.imglight} />
                    <Section0 />
                    {/* Importing section */}
                    <Section/>

                    {/* Importing service */}
                    <Service/>

                    {/* Importing about us */}  
                    {/* <About/> */}

                    {/* Importing feature */}
                    <Feature/>

                    {/* Importing counter */}
                    <Counter/>

                    {/* Importing clients */}
                    <Clients/>

                    {/* Importing get in touch */}
                    <GetInTouch/>

                    {/* Importing subscribe */}
                    {/* <Subscribe/> */}
                    
                    {/* Importing footer */}
                    <Footer/>
                </Suspense>

            </React.Fragment>
        );
    }
}

export default Layout1;