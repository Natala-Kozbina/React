import React from 'react';
import ReactDOM from 'react-dom';
import  './goto_home.scss';

var GotoHome = React.createClass({

    render: function() {
        var data = this.props.data;
        return (
            <button
                type="button"
                onClick={this.props.gotoHome}
                className="btn btn-sm btn-primary pull-right goto-home__position">
                Home
                </button>
            );
        }
    });

export default GotoHome;
