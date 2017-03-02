import React from 'react';
import ReactDOM from 'react-dom';
import myArticle from '../datas/datas_article.js';
import GotoHome from '../goto_home/goto_home.js';
import  './article.scss';

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

var Article = React.createClass({
    gotoHome() {
        browserHistory.push('/')
    },

  render() {
      var article = myArticle;
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
                <div className='container'>
                    <GotoHome gotoHome={this.gotoHome}/>
                </div>
                { articleTemplate}
           </div>
       )
  }

});

export default Article;
