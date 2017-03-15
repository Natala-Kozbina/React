import React, { Component } from 'react';
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

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data:  myListStore.myNews,
          active: 0,
          term: '',
          selectedField: '',
          value: ''
        };
        console.log('this.state -> ', this.state);
      }

      componentDidMount() {
          myListStore.addChangeListener(this.selectFieldClear.bind(this));
      }

      selectFieldClear () {
        this.setState({
          selectedField: '',
          data: myListStore.myNews
        });
      }

      updateData(config ) {
          console.log('updateData config -> ', config);
          console.log('updateData config.data -> ', config.data);
          // this.setState({data: config.data});
        AppDispatcher.dispatch({
            eventName: 'search',
            newItem: config.data,
            selectedField: this.state.selectedField
          });
    }

    selectField (index) {
        var selectedField = index.target.value;
        this.setState({
          selectedField: selectedField,
          data: myListStore.myNews
        });
    }

    gotoPage (data) {
        return function () {
            browserHistory.push(data);
        }
    }

    render () {
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
                            onSelectValue={this.selectField.bind(this)}/>
                    </div>
                    <div className=" col-md-10">
                        <Search
                            data={this.state.data}
                            selectedField={this.state.selectedField}
                            update={this.updateData.bind(this)} />
                    </div>
                </div>
                <News
                    data={this.state.data}
                    update={this.updateData.bind(this)}/>
                <TotalNews  data={this.state.data} />
                <Comments comment={myListStore.myComments}/>
            </div>
        );
    }
};

export default App;
