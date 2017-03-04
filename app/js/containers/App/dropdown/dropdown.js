import React from 'react';
import ReactDOM from 'react-dom';
import  './dropdown.scss';
import 'react-select/dist/react-select.css';

var Dropdown = React.createClass({

    render: function(e) {
        return (
            <div className="dropdown Primary">
                <select
                    onChange={this.props.onSelectValue}
                    className=" btn-primary btn "
                    type="button"
                    defaultValue="Выберите поле"
                    data-toggle="dropdown"
                    title="Choose one of the following...">
                    <option className="dropdown-item" value="Выберите поле" disabled>Выберите поле</option>
                    <option className="dropdown-item" value="author">Author</option>
                    <option className="dropdown-item" value="news">News</option>
                </select>
            </div>
        );
    }
});

export default Dropdown;
