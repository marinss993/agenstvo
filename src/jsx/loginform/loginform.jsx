/**
 * Created by marinss993 on 30.12.15.
 */
import React from 'react';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

//var injectTapEventPlugin = require("react-tap-event-plugin");
//injectTapEventPlugin();

const LoginForm = React.createClass({
    mixins: [LinkedStateMixin],
getInitialState() {
  return {
    loginName:"",
    password:""
  };
},
    render() {
        return (
            <div>
                <form name="loginForm" action="/logins" method="post" className="form-horizontal">
                    <Input type="text" id="loginName"
                           name="loginName" label="Имя"
                           valueLink={this.linkState('loginName')}
                           labelClassName="col-xs-2" wrapperClassName="col-xs-6"
                           key="a1" ref="loginName" pattern="^[a-zA-Zа-яА-Я]{10}$"

                    />
                    <Input type="password" id="password" name="password"
                           label="Пароль" labelClassName="col-xs-2" valueLink={this.linkState('password')}
                           wrapperClassName="col-xs-6" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                           key="a2" ref="password"
                    />
                    <ButtonGroup>
                        <Button key="a3" bsClass="btn btn-primary" type="submit">Отправить</Button>
                        <Button key="a4" bsClass="btn btn-danger" type="reset">Очистить</Button>
                    </ButtonGroup>
                </form>
            </div>
        );
    }
});

export default LoginForm;
