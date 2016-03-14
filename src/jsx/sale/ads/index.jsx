import React from 'react';
import Ad from '../ad';
require('velocity-animate');
require('velocity-animate/velocity.ui');
import Reflux from 'reflux';
import Actions from '../../actions'
import Stores from '../../stores'
var VelocityTransitionGroup = require('velocity-react/velocity-transition-group');
var velocityHelpers = require('velocity-react/velocity-helpers');

class Ads extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "items": [{"title":""}],
            "duration": 500
        };
    }

    static rows = {};

    //dataTable() {
    //    let xhr = new XMLHttpRequest();
    //    let dataTab = '';
    //    xhr.open('POST', 'data2.json', false);
    //    xhr.send();
    //    if (xhr.status != 200) {
    //        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    //    } else {
    //        dataTab = JSON.parse(xhr.responseText);
    //    }
    //    return dataTab;
    //}

    componentWillMount() {
        Actions.sends();
    }

    componentDidMount() {
        this.unsubscribe = Stores.listen(this.dataChange);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    dataChange = (data) => {
        this.setState({
            items: data
        });
        //this.addRows()
    };

    addRows(){
        let row = this.state.items.map(function (item, i, m) {
                return (
                    <div className="list-group">
                        <div key={item.price + item.relTel} className="list-group-item">
                            <Ad  {...item} />
                        </div>
                    </div>
                );
            });
        return row;
    }

    Animations = {
        // Register these with UI Pack so that we can use stagger later.
        In: velocityHelpers.registerEffect({
            calls: [
                [{
                    transformPerspective: [800, 800],
                    transformOriginX: ['50%', '50%'],
                    transformOriginY: ['100%', '100%'],
                    marginBottom: 0,
                    opacity: 1,
                    rotateX: [0, 130]
                }, 1, {
                    easing: 'ease-out',
                    display: 'block'
                }]
            ]
        }),

        Out: velocityHelpers.registerEffect({
            calls: [
                [{
                    transformPerspective: [800, 800],
                    transformOriginX: ['50%', '50%'],
                    transformOriginY: ['0%', '0%'],
                    marginBottom: -30,
                    opacity: 0,
                    rotateX: -70
                }, 1, {
                    easing: 'ease-out',
                    display: 'block'
                }]
            ]
        })
    };

    render() {
        this.rows = this.addRows();
        var enterAnimation = {
            animation: this.Animations.In,
            stagger: this.state.duration,
            duration: this.state.duration,
            backwards: true,
            display: 'block',
            style: {
                // Since we're staggering, we want to keep the display at "none" until Velocity runs
                // the display attribute at the start of the animation.
                display: 'none'
            }
        };

        var leaveAnimation = {
            animation: this.Animations.Out,
            stagger: this.state.duration,
            duration: this.state.duration,
            backwards: true
        };
        return (
            <div>
                <VelocityTransitionGroup component="div" enter={enterAnimation} leave={leaveAnimation}>
                    { this.rows }
                </VelocityTransitionGroup>
            </div>
        );
    }
}

export default Ads;
