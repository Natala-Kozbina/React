import React from 'react';
import ReactDOM from 'react-dom';

var Dropdown = React.createClass({

    myFunction : function(e) {
        console.log(777);
        console.log('e - ', e);

        // const value = e.target.value.toLowerCase();
        // console.log('value - ', value);

    },

    render: function(e) {
        // console.log();
        const data = this.props.data;
        // const value = e.target.value.toLowerCase();

        return (
            <div className="dropdown">
                <button
                    onClick={this.myFunction}
                    className="dropbtn"
                    >
                    Выберите поле
                </button>
                <div className="dropdown-content">
                    <a href="#">Autor</a>
                    <a href="#">News</a>
                    </div>
                    </div>
                );
            }
});

export default Dropdown;
