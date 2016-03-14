import React from 'react';
//import injectTapEventPlugin from "react-tap-event-plugin";
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import FontIcon from 'material-ui/lib/font-icon';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
//injectTapEventPlugin();

const OutPutForm = React.createClass({
    mixins: [LinkedStateMixin],
   getInitialState() {
     return {
         fromEmail: '',
         tel: '',
         foto1: '',
         foto2: '',
         description:''
     };
   },

    render() {
        return (
            <div>
                <h3 className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    Заявка на размещение объявления
                </h3>
                <form action="/" enctype="multipart/form-data">
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <TextField
                            name="fromEmail"
                            id="fromEmail"
                            hintText="e-mail"
                            fullWidth={true}
                            floatingLabelText="Ваш адрес эл.почты:"
                            underlineStyle={{borderColor:'blue'}}
                            hintStyle={{color: 'red'}}
                            valueLink={this.linkState('fromEmail')}
                            type="email"
                            pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                        />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <TextField
                            type="email"
                            pattern="(\+?\d[- .]*){7,13}"
                            name="whomEmail"
                            id="whomEmail"
                            hintText="Почтовый адрес по умолчанию"
                            disabled={true}
                            fullWidth={true}
                            defaultValue='marinss993@gmail.com'
                            floatingLabelText="Кому:"
                        />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <TextField
                            type="tel"
                            pattern="^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$"
                            name="tel"
                            id="tel"
                            hintText="Телефон"
                            fullWidth={true}
                            floatingLabelText="Ваш телефон:"
                            underlineStyle={{borderColor:'blue'}}
                            hintStyle={{color: 'red'}}
                            valueLink={this.linkState('tel')}
                        />
                    </div>
                    <h3 className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        Фотографии объекта:
                    </h3>

                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <TextField
                            name="foto1"
                            id="foto1"
                            //onChange=""
                            fullWidth={true}
                            type="file"
                            //value={this.state.foto1}
                        />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12col-xl-12'>
                        <TextField
                            name="foto2"
                            id="foto2"
                            //onChange=""
                            fullWidth={true}
                            type="file"
                            //value={this.state.foto2}
                        />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <TextField
                            name="description"
                            id="description"
                            hintText="Описание:"
                            fullWidth={true}
                            floatingLabelText="Краткое описание обьекта"
                            multiLine={true}
                            underlineStyle={{borderColor:'blue'}}
                            hintStyle={{color: 'red'}}
                            valueLink={this.linkState('description')}
                        />
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <RaisedButton
                            type="submit"
                            primary={true}
                            label="Отправить"
                            className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'
                        >
                            <FontIcon className="muidocs-icon-custom-github" />
                        </RaisedButton>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <RaisedButton type="reset" secondary={true} label="Очитстить" labelPosition="after">
                            <FontIcon className="muidocs-icon-custom-github" />
                        </RaisedButton>
                    </div>
                </form>
            </div>
        );
    }
});
export default OutPutForm;
