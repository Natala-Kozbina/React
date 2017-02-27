import React from 'react';
import ReactDOM from 'react-dom';

var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate = data.map(function(item, index) {
            return (
                <tbody key={index}>
                    <tr >
                        <th className="news__namber">{index+1}</th>
                        <th className="news__author">{item.author}</th>
                        <th className="news__text">{item.text}</th>
                    </tr>
                </tbody >
            )
        })
        return (
            <div className="news">
                {newsTemplate}
            </div>
        );
    }
});

export default News;
