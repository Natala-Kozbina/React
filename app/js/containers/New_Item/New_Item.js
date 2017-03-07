import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';
import uuid from 'uuid';

import myListStore from '../datas/list_store.js';
import GotoButton from './../goto_article/goto_article.js';

import AppDispatcher from '../../AppDispatcher.js';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class NewItem extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    componentDidMount() {
        myListStore.addChangeListener(this.handleClear.bind(this));
    }

    handleClear() {
        this.setState({ value: '' });
    }

    gotoPage(data) {
        return function () {
            if(data != "home") {
                browserHistory.push(data);
            }else {
                browserHistory.push('/');
            }
        }
    }

    //  @autobind
     handleChange({ target: { value } }) {
        //  console.log('handleChange -> ', value );
        //  console.log('this.state -> ', this.state );
        //  console.log('autobind -> ', autobind );
        this.setState({ value });
    }

    createAuthor( e, value ) {
        e.preventDefault();
        // console.log('createAuthor -> ', value);
        AppDispatcher.dispatch({
            eventName: 'new-item',
            newItem: {
                id: uuid(),
                value: this.state.value } // example data
        });
    }

    renderTodo() {
        return myListStore.items.map(({ value, id}) => (
            <li key={ id } data-id={ id }>{ value }</li>
        ));
    }

    render() {
       const todo = this.renderTodo();

       return (
            <div>
                <div className='container'>
                    <div className='container goto-home__position'>
                        <GotoButton
                            className="container"
                            gotoPage={this.gotoPage}
                            namePage='home'
                            />
                    </div>
                </div>
                <div className='container'>
                    <form>
                        <input
                            value={ this.state.value }
                            onChange={ this.handleChange.bind(this) } />
                        <button
                            className="btn btn-sm btn-primary pull-right"
                            onClick={ this.createAuthor.bind(this) }>New Author</button>
                    </form>
                    <ul> { todo } </ul>
                </div>
           </div>
       )
  }

};

export default NewItem;
