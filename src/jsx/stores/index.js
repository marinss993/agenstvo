/**
 * Created by marinss993 on 10.02.16.
 */
import Reflux from 'reflux';
import _ from 'underscore';
import _filter from 'lodash/filter';
import Actions from '../actions/index';


//require("expose?SockJS!imports?SockJS=SockJS!!exports?SockJS!SockJS");
const Stores = Reflux.createStore({
    dataJson: [{
        "title": "Новострой",
        "imgUrl": "images/image203768.jpg",
        "price": "20000",
        "Area": "Днепровский",
        "Floor": "3",
        "Floors": "8",
        "Room": "4",
        "fotoUrl": "images/425full.jpg",
        "relName": "Петя",
        "relLastName": "Иванов",
        "relTel": "(050)306-565-01",
        "relMail": "сссс@mail.ru"
    }, {
        "title": "Дом",
        "imgUrl": "images/IMG20151130.jpg",
        "price": "102000",
        "Area": "Комсомольский",
        "Floor": "3",
        "Floors": "10",
        "Room": "3",
        "fotoUrl": "images/425full.jpg",
        "relName": "Николай",
        "relLastName": "Михалыч",
        "relTel": "(050)306-565-01",
        "relMail": "сссс@mail.ru"
    }, {
        "title": "Квартира",
        "imgUrl": "images/image203768.jpg",
        "price": "72000",
        "Area": "Янтарный",
        "Floor": "5",
        "Floors": "5",
        "Room": "6",
        "fotoUrl": "images/425full.jpg",
        "relName": "Николай",
        "relLastName": "Михалыч",
        "relTel": "(050)306-565-01",
        "relMail": "сссс@mail.ru"
    }],

    init: function () {
        this.listenTo(Actions.faind, 'onFaind');
        this.listenTo(Actions.sends, 'onSends');
    },

    onSends: function () {
        this.trigger(this.dataJson);
    },
    onFaind: function (data) {
        let f = {};
        _.each(data, function(value, key, list){
            if (value !== ""){
                f[key] = value;
            }
        });
        //f = JSON.stringify(f);
        console.log( f );
        let newData = _.where( this.dataJson, f );
        //f = {};
        this.trigger(newData);
    }
});

export default Stores;