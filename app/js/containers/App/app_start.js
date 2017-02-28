import React from 'react';
import ReactDOM from 'react-dom';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import News from '../news/news.js';
import myNews from '../datas/datas_news.js';
import myComments from '../datas/datas_commets.js';
import Comments from '../comments/comments.js';
import TotalNews from '../total_news/total_news.js';
import Search from '../search/search.js';
import Dropdown from '../dropdown/dropdown.js';
import  './app_start.scss';

var my_news = myNews;
var my_comments = myComments;

var App = React.createClass({

    getInitialState : function() {
        return {
          data:  my_news,
          active: 0,
          term: '',
          selectedField: ''
        }
    },

    updateData : function(config) {
        this.setState(config);
    },

    myFunction : function(index) {
        var selectedField = index.target.value;
        this.setState({selectedField: selectedField});
    },

    render: function() {
        return (
            <div className="app_header">

                <h3>Новости</h3>

                <Dropdown
                    onSelectValue={this.myFunction}
                    />
                <Search
                    data={my_news}
                    selectedField={this.state.selectedField}
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
