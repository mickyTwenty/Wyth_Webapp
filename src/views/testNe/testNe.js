import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";



class TestNe extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <>
                <div className="section section-about">
                    <Container>
                        <Row>
                       
                            <Col>
                                <img src={require("assets/img/gas_promotion.png")}  />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default TestNe;