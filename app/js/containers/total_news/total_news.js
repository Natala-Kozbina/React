import React from 'react';
import ReactDOM from 'react-dom';

var TotalNews = React.createClass({

  render: function() {
      var data = this.props.data;
      return (
          <strong>Всего новостей: {data.length} </strong>
      );
    }
});

export default TotalNews;
