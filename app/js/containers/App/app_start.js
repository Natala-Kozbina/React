import React from 'react';
import ReactDOM from 'react-dom';

import News from '../news/news.js';
import myNews from '../datas/datas_news.js';
import myComments from '../datas/datas_commets.js';
import Comments from '../comments/comments.js';
import TotalNews from '../total_news/total_news.js';
import Search from '../search/search.js';
import Dropdown from '../dropdown/dropdown.js';
import GotoButton from '../goto_button/goto_button.js';
import  './app_start.scss';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

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

    gotoArtical: function() {
        browserHistory.push('article')
    },

    render: function() {
        return (
            <div className="app_header">
                <GotoButton
                    gotoArtical={this.gotoArtical}/>
                <h3>Новости</h3>
                <div className="container">
                    <div className=" col-md-2">
                    <Dropdown
                        onSelectValue={this.myFunction}
                        />
                    </div>
                    <div className=" col-md-7">
                    <Search
                        data={my_news}
                        selectedField={this.state.selectedField}
                        update={this.updateData} />
                        </div>
                </div>
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
