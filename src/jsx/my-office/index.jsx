import React from 'react';

//var injectTapEventPlugin = require("react-tap-event-plugin");
import { Link, IndexLink } from 'react-router';
import Table from 'react-uikit-table';

var dataJson = [{
    "d1": "10",
    "d2": "a",
    "d3": "Data",
    "d4": "10",
    "d5": "a",
    "d6": "Data",
    "d7": "10",
    "d8": "a",
    "d9": "Data",
    "d10": "10",
    "d11": "a"
}, {
    "d1": "20",
    "d2": "b",
    "d3": "Data",
    "d4": "20",
    "d5": "b",
    "d6": "Data",
    "d7": "20",
    "d8": "b",
    "d9": "Data",
    "d10": "20",
    "d11": "b"
}, {
    "d1": "10",
    "d2": "a",
    "d3": "Data",
    "d4": "10",
    "d5": "a",
    "d6": "Data",
    "d7": "10",
    "d8": "a",
    "d9": "Data",
    "d10": "10",
    "d11": "a"
}, {
    "d1": "20",
    "d2": "b",
    "d3": "Data",
    "d4": "20",
    "d5": "b",
    "d6": "Data",
    "d7": "20",
    "d8": "b",
    "d9": "Data",
    "d10": "20",
    "d11": "b"
}, {
    "d1": "10",
    "d2": "a",
    "d3": "Data",
    "d4": "10",
    "d5": "a",
    "d6": "Data",
    "d7": "10",
    "d8": "a",
    "d9": "Data",
    "d10": "10",
    "d11": "a"
}, {
    "d1": "20",
    "d2": "b",
    "d3": "Data",
    "d4": "20",
    "d5": "b",
    "d6": "Data",
    "d7": "20",
    "d8": "b",
    "d9": "Data",
    "d10": "20",
    "d11": "b"
}, {
    "d1": "30",
    "d2": "c",
    "d3": "Data",
    "d4": "30",
    "d5": "c",
    "d6": "Data",
    "d7": "30",
    "d8": "c",
    "d9": "Data",
    "d10": "30",
    "d11": "c"
}];

//injectTapEventPlugin();

const MyOffice = React.createClass({
    //dataTable(){
    //    let xhr = new XMLHttpRequest();
    //    let dataTab = '';
    //    xhr.open('POST', 'data.json', false);
    //    xhr.send();
    //    if (xhr.status != 200) {
    //        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    //    } else {
    //        dataTab = JSON.parse(xhr.responseText);
    //    }
    //    return dataTab;
    //},


    componentDidMount() {
        var tables = $('#sortable').DataTable( {
            "language": {
                "url": "//cdn.datatables.net/plug-ins/1.10.10/i18n/Russian.json"
            }
        });

    },

    getDefaultProps() {
      return {
        user: "Мой"
      };
    },

    render() {
        return (
            <div>
                <h1>
                    {this.props.user} кабинет.
                </h1>
                <h3><Link to="/addnew">Добавить новое объявление</Link></h3>
                <Table
                    id="sortable"
                    className="table table-striped sortable"
                    head={['№', 'Тип', 'Район', 'Комнат','Этаж','Этажей','Тип дома','Телефон','Цена','Состояние','Удалить']}
                    body={ dataJson }
                />

            </div>
        );
    }
});
export default MyOffice;
