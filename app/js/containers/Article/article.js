import React from 'react';
import ReactDOM from 'react-dom';
import myListStore from '../datas/list_store.js';
import GotoButton from './../goto_article/goto_article.js';
import  './article.scss';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

var Article = React.createClass({
    gotoHome() {
        browserHistory.push('/');
    },

    gotoPage: function(data) {
        return function () {
            if(data != "home") {
                console.log('gotoPage', data);
                browserHistory.push(data);
            }else {
                browserHistory.push('/');
            }
        }
    },

  render() {
      var article = myListStore.myArticle;
      var articleTemplate;
      if(article.length > 0) {

          articleTemplate = article.map(function(item, index) {
            return (
                <div className="container list-group article_position" key={index}>
                    <div className="list-group-item active">
                        <p className=" " > Статья № {index+1}</p>
                        <p className=" "> <strong>Автор - </strong> {item.author}</p>
                        <p className=" ">{item.article}</p>
                    </div>
                </div>
            )
          })
      } else {
          articleTemplate = <p> Статей нет </p>
      }
       return (
            <div>
                <div className='container goto-home__position'>
                    <GotoButton
                        className="container"
                        gotoPage={this.gotoPage}
                        namePage='home'
                        />
                </div>
                { articleTemplate}
           </div>
       )
  }

});

export default Article;
