import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Import Blog Box
import CounterBox from "./counter-box";

//Import Images
import counterbg from "../../assets/images/counter-bg-1.jpg";

class Counter extends Component {
    state = {
        counters : [
            { icon : "pe-7s-like2", title : "SUCCESSFUL PROJECT", postfix : "+", end : 620 },
            { icon : "pe-7s-light", title : "PROJECT IDEAS", postfix : "+", end : 350 },
            { icon : "pe-7s-smile", title : "SATISFIED CLIENTS", postfix : "+", end : 800 },
            { icon : "pe-7s-star", title : "AWARD WIN", postfix : "", end : 590 },
        ],
    }
    render() {
        return (
            <React.Fragment>
            
            </React.Fragment>
        );
    }
}

export default Counter;