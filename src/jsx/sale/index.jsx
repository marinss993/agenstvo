import React from 'react';
import FindSale from './faind';
import Ads from './ads';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Sale extends React.Component {
    render() {
        return (
            <Row className="show-grid">
                <Col xs={2} md={2}>
                    <Row>
                        <FindSale />
                    </Row>

                </Col>
                <Col xs={10} md={10}>
                    <Ads />
                </Col>
            </Row>
        );
    }
}

export default Sale;
