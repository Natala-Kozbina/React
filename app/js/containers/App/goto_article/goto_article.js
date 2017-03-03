import React from 'react';
import ReactDOM from 'react-dom';
import  './goto_article.scss';

var GotoButton = React.createClass({

    render: function() {
        var data = this.props.data;
        return (
            <button
                type="button"
                onClick={this.props.gotoArtical}
                className="btn btn-sm btn-primary pull-right goto-article__position">
                Artical
                </button>
            );
        }
    });

export default GotoButton;
