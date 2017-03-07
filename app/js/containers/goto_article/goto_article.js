import React from 'react';
import ReactDOM from 'react-dom';
import  './goto_article.scss';

var GotoButton = React.createClass({

    render: function() {
        var data = this.props.data;
        // console.log('data -> ', this.props);
        return (
            <button
                type="button"
                onClick={this.props.gotoPage(this.props.namePage)}
                className="btn btn-sm btn-primary pull-right goto-article__position">
                {this.props.namePage}
                </button>
            );
        }
    });

export default GotoButton;
