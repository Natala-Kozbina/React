import React from 'react';
import ReactDOM from 'react-dom';

var TotalNews = React.createClass({

  render: function() {
      var data = this.props.data;
      return (
          <strong className={data.length > 0 ? "app_totalNews" : "none"}>Всего новостей: {data.length} </strong>
      );
    }
});

export default TotalNews;
