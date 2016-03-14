import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
//import injectTapEventPlugin from "react-tap-event-plugin";
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import PureRenderMixin from 'react-addons-pure-render-mixin';
//injectTapEventPlugin();

const EditForm = React.createClass({

    mixins: [LinkedStateMixin, PureRenderMixin],

    getInitialState() {
        return {
            pageState: true,
            numRows: ''
        };
    },

    getDefaultProps() {
        return {
            edit: 'Редактировать объявление',
            news: 'Новое объявление',
            numRowsLabel: '',
            numRowsValue: ''
        };
    },
    render() {
        let zag = '';
        if (this.state.pageState) {
            zag = React.createElement('h1', {className: "col-xs-12 col-sm-12 col-sm-12 col-lg-11"}, this.props.edit);
        }
        else {
            zag = React.createElement('h1', {className: "col-xs-12 col-sm-12 col-sm-12 col-lg-11"}, this.props.news);
        }
        return (
            <div>
                { zag }
                <form>
                    <Input type="text" id="loginName"
                           name="loginName" label={ this.props.numRowsLabel }
                           valueLink={this.linkState('numRows')}
                           labelClassName="col-xs-2" wrapperClassName="col-xs-6"
                           key="a1" ref="loginName" pattern="^[a-zA-Zа-яА-Я]{10}$"
                    />
                </form>
            </div>
        )
    }
});

export default EditForm;