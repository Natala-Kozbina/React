import React from 'react';
import ReactDOM from 'react-dom';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import News from '../news/news.js';
import myNews from '../datas/datas_news.js';
import myComments from '../datas/datas_commets.js';
import Comments from '../comments/comments.js';
import TotalNews from '../total_news/total_news.js';
import Search from '../search/search.js';

var my_news = myNews;
var my_comments = myComments;

var App = React.createClass({

    getInitialState : function() {
        return {
          data:  my_news,
          active: 0,
          term: ''
        }
    },

    updateData : function(config) {
        // console.log('updateData/config - ', config);
        this.setState(config);
        console.log('this.state - ', this.state);
        // return config;
    },

    render: function() {
        return (
            <div className="app_header">
                Всем привет, я компонент App!
                <Search
                    data={my_news}
                    update={this.updateData} />
                <News
                    data={this.state.data}
                    update={this.updateData}/>
                <TotalNews  data={my_news} />
                <Comments comment={my_comments}/>
            </div>
        );
    }
});

export default App;
