import React from 'react';
import ReactDOM from 'react-dom';

var News = React.createClass({
  render: function() {
    return (
      <div className="news">
        К сожалению, новостей нет.
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app_header">
        Всем привет, я компонент App!
        
        <News />
      </div>
    );
  }
});

export default App;
