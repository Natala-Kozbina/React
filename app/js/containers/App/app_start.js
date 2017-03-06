import React from 'react';
import ReactDOM from 'react-dom';

import AppDispatcher from '../../AppDispatcher.js';

import News from './news/news.js';
import myListStore from '../datas/list_store.js';
import Comments from './comments/comments.js';
import TotalNews from './total_news/total_news.js';
import Search from './search/search.js';
import Dropdown from './dropdown/dropdown.js';
import GotoButton from './goto_article/goto_article.js';
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

    myFunction : function(index) {
        var selectedField = index.target.value;
        this.setState({selectedField: selectedField});
    },

    gotoArtical: function() {
        browserHistory.push('article')
    },

    createAuthor: function( evt ) {
        console.log('createAuthor');

        AppDispatcher.dispatch({
            eventName: 'new-item',
            newItem: { name: 'Marco' } // example data
        });
    },

    render: function() {
        return (
            <div className="app_header container">
                <GotoButton className="container"
                    gotoArtical={this.gotoArtical}/>
                <h3>Новости</h3>
                <div className="container">
                    <div className=" col-md-2">
                    <Dropdown
                        onSelectValue={this.myFunction}
                        />
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
                <button className="btn" onClick={ this.createAuthor }>New Author</button>
                <TotalNews  data={my_news} />
                <Comments comment={my_comments}/>
            </div>
        );
    }
});

export default App;
