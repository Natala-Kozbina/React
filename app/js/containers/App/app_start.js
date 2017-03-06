import React from 'react';
import ReactDOM from 'react-dom';

import AppDispatcher from '../../AppDispatcher.js';

import News from './news/news.js';
import myListStore from '../datas/list_store.js';
import Comments from './comments/comments.js';
import TotalNews from './total_news/total_news.js';
import Search from './search/search.js';
import Dropdown from './dropdown/dropdown.js';
import GotoButton from './../goto_article/goto_article.js';
import  './app_start.scss';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

var my_news = myListStore.getMyNews();
var my_comments = myListStore.getMyComments();

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

    selectField : function(index) {
        var selectedField = index.target.value;
        this.setState({selectedField: selectedField});
    },

    gotoPage: function(data) {
        return function () {
            console.log('gotoPage', data);
            browserHistory.push(data);
        }
    },

    render: function() {
        return (
            <div className="app_header container">
                <GotoButton
                    className="container"
                    gotoPage={this.gotoPage}
                    namePage='article'
                    />
                    <GotoButton
                        className="container"
                        gotoPage={this.gotoPage}
                        namePage='newItem'
                        />
                <h3>Новости</h3>
                <div className="container">
                    <div className=" col-md-2">
                        <Dropdown
                            onSelectValue={this.selectField}/>
                    </div>
                    <div className=" col-md-10">
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
