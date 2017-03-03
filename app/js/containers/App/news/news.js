import React from 'react';
import ReactDOM from 'react-dom';
import  './news.scss';

var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var update = this.props.update;
        var newsTemplate;

        if(data.length >0) {
            newsTemplate = data.map(function(item, index) {
                return (
                    <tbody key={index}>
                        <tr >
                            <th className="news__namber">{index+1}</th>
                            <th className="news__author">{item.author}</th>
                            <th className="news__text">{item.news}</th>
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
                <thead className={data.length > 0 ? "" : "none"}>
                    <tr>
                        <th>N</th>
                        <th>Author</th>
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
