import React from 'react';

import Col from 'react-bootstrap/lib/Col';

class Ad extends React.Component {
    static defaultProps = {
        title: "",
        imgUrl: "",
        price: "",
        Area: "",
        Floor: "",
        Floors: "",
        Room: "",
        fotoUrl: "",
        relName: "",
        relLastName: "",
        relTel: "",
        relMail: ""
    };
    static propTypes = {
        title: React.PropTypes.string,
        //imgUrl: React.PropTypes.url,
        price: React.PropTypes.string,
        Area: React.PropTypes.string,
        Floor: React.PropTypes.string,
        Floors: React.PropTypes.string,
        Room: React.PropTypes.string,
        //fotoUrl: React.PropTypes.url,
        relName: React.PropTypes.string,
        relLastName: React.PropTypes.string,
        relTel: React.PropTypes.string
        //relMail: React.PropTypes.email
    };

    render() {
        return (
            <div className="container-fluid adClass">
            <section className="row">
                <h3 xs={12} md={12}>{ this.props.title }</h3>
                <Col xs={3} md={3}>
                    <img className="img-responsive" src={this.props.imgUrl}   />
                </Col>
                <Col xs={4} md={4}>
                    <p>Район :{ this.props.Area }</p>
                    <p>Этаж :{ this.props.Floor }</p>
                    <p>Этажность :{ this.props.Floors }</p>
                    <p>Комнат :{ this.props.Room }</p>
                    <div className="price bg-danger well">{ this.props.price }</div>
                </Col>
                <Col xs={2} md={2}>
                    <img className="img-thumbnail" src={ this.props.fotoUrl }/>
                </Col>
                <Col xs={3} md={3}>
                    <p>Имя :{ this.props.relName }</p>
                    <p>Фамилия :{ this.props.relLastName }</p>
                    <p>Телефон:{ this.props.relTel }</p>
                    <p>mail:{ this.props.relMail }</p>
                </Col>
            </section>
            </div>
        );
    }
}

export default Ad;
