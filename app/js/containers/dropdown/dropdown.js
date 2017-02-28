import React from 'react';
import ReactDOM from 'react-dom';
import  './dropdown.scss';
// import { FormControl } from 'react-bootstrap';
// import Select from 'react-select';
import 'react-select/dist/react-select.css';

var Dropdown = React.createClass({

    myFunction : function(index) {
        var selectedField = index.target.value;
        console.log('onChange -> ', selectedField);
    },

    render: function(e) {
        // const data = this.props.data;
        return (
            <div className="dropdown Primary">
                <select
                    // ref={(el) => this.select = el}
                    onChange={this.myFunction}
                    onSelect={this.selestFunction}
                    className=" btn-primary btn "
                    type="button"
                    data-toggle="dropdown"
                    title="Choose one of the following...">
                    <option className="dropdown-item" value="author">Author</option>
                    <option className="dropdown-item" value="news">News</option>
                </select>
            </div>
        );
    }
});

export default Dropdown;
