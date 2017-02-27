import React from 'react';
import ReactDOM from 'react-dom';

var TotalNews = React.createClass({

  render: function() {
      var data = this.props.data;
      return (
          <strong className="app_totalNews">Всего новостей: {data.length} </strong>
      );
    }
});

export default TotalNews;
