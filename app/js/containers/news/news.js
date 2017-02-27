import React from 'react';
import ReactDOM from 'react-dom';

var News = React.createClass({
  render: function() {
    console.log('News - ', this);
    var data = this.props.data;
    console.log('this.props.data - ', this.props.data);
    var newsTemplate = data.map(function(item, index) {
      return (
        <div key={index}>
          <p className="news__author">{item.author}:</p>
          <p className="news__text">{item.text}</p>
        </div>
      )
    })
    console.log('newsTemplate - ', newsTemplate);
    return (
      <div className="news">

        {newsTemplate}
      </div>
    );
  }
});

export default News;
