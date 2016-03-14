'use strict';
import 'babel-polyfill'
import '../scss/index.scss'
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, IndexLink, browserHistory } from 'react-router';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
//import { createBrowserHistory } from 'history/lib/createBrowserHistory'
import LoginForm from './loginform/loginform';
import OutPutForm from './outputform/outputform';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import MyOffice from './my-office';
import EditForm from './edit-form';
import Sale from './sale';

var injectTapEventPlugin = require("react-tap-event-plugin");
//const history = createBrowserHistory();
injectTapEventPlugin();

const App = React.createClass({

    render() {
        let bigImg = '',
            sideBar = '';

        if (this.props.sidebar == undefined && this.props.main == undefined) {
            bigImg = React.createElement('img', {src: "http://localhost/agenstvo/dist/images/main.jpg"});
        }
        if (this.props.sidebar !== undefined) {
            sideBar = React.createElement('div', {className: 'col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'},
                this.props.sidebar
            );
        }
        return (
            <div>
                <div className="row">
                    <div className="col-md-12 col-lg-c">
                        <Navbar>
                            <Navbar.Header>
                                <Nav>
                                    <a className="imgli" href="#/">
                                        <img src="../images/logo2.jpg"/>

                                    </a>
                                </Nav>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <li><Link to="/" >Главная</Link></li>
                                    <li><Link to="/sale">Купить Дом/Квартитру</Link></li>
                                    <li><Link to="/outform">Продать Дом/Квартиру</Link></li>
                                    <li><Link to="/myoffice">Мой кабинет</Link></li>
                                    <li><Link to="/logins">Авторизация</Link></li>
                                </Nav>
                            </Navbar.Collapse>

                        </Navbar>
                    </div>
                </div>

                <div className="row">
                    {sideBar}

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            {this.props.main}
                            {bigImg}
                    </div>
                </div>
            </div>
        )
    }
});

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={App}/>
            <Route path="/sale" components={{main: Sale}}/>
            <Route path="/myoffice" components={{main: MyOffice}}/>
            <Route path="/outform" components={{main: OutPutForm}}/>
            <Route path="/logins" components={{main: LoginForm }}/>
            <Route path="/addnew" components={{main: EditForm}}/>
        </Route>
    </Router>, document.getElementById('app'));

//<Route path="/groups" components={{main: Groups, sidebar: GroupsSidebar}} />
//<Route path="/users" components={{main: Users, sidebar: UsersSidebar}} />history={createBrowserHistory()}