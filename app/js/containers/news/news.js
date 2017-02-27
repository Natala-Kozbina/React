import React from 'react';
import ReactDOM from 'react-dom';

var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate;

        if(data.length >0) {
            newsTemplate = data.map(function(item, index) {
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
        } else {
            newsTemplate = <p> Новостей нет </p>
        }

        return (
            <div className="news">
            <table className="app_table">
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Autor</th>
                        <th>News</th>
                    </tr>
                </thead>
                {newsTemplate}
            </table>
            </div>
        );
    }
});

export default News;
