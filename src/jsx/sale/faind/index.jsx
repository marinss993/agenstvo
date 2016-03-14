import React from 'react';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';
import Reflux from 'reflux';
import Actions from '../../actions'

class FindSale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "Area" : "",
            "price" : "",
            "Room"  : "",
            "Floor" : "",
            "Floors": ""
        };
    }
    handleChangeArea = (event) => {
        this.setState({title: event.target.value});
    };
    handleChangePrice = (event) => {
        this.setState({price: event.target.value});
    };
    handleChangeRoom = (event) => {
        this.setState({Room: event.target.value});
    };
    handleChangeFloor = (event) => {
        this.setState({Floor: event.target.value});
    };
    handleChangeFloors = (event) => {
        this.setState({Floors: event.target.value});
    };
    handlerDataChange = () => {
        let faileds = {
            title:  this.state.Area,
             price:  this.state.price,
             Room:   this.state.Room ,
             Floor:  this.state.Floor,
            Floors: this.state.Floors
            };
        Actions.faind(faileds);
        this.state = {
            "Area" : "",
            "price" : "",
            "Room"  : "",
            "Floor" : "",
            "Floors": ""
        };
    };

    render() {
        return (
            <form name="faindsale" classID="faindsale" >
                <Input id="priceMin" ref="priceMin" type="text" bsSize="small" placeholder="Цена от" onChange={ this.handleChangePrice }/>
                <Input type="text" bsSize="small" placeholder="Цена до" onChange={ this.handlerOnChange }/>
                <Input id="Room" ref="Room" type="text" bsSize="small" placeholder="Комнат" onChange={ this.handleChangeRoom }/>
                <Input id="Floor" ref="Floor" type="text" bsSize="small" placeholder="Этаэ" onChange={ this.handleChangeFloor }/>
                <Input id="Floors" ref="Floors" type="text" bsSize="small" placeholder="Этажность" onChange={ this.handleChangeFloors }/>
                <Button xs={12} type="reset" bsStyle="danger" bsSize="small">Очистить</Button>
                <Button xs={12} bsStyle="primary" bsSize="small" onClick={ this.handlerDataChange }>Найти</Button>
            </form>
        );
    }
}

export default FindSale;
