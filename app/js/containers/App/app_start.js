import React from 'react';
import ReactDOM from 'react-dom';

import News from '../news/news.js';
import Comments from '../comments/comments.js';
import TotalNews from '../total_news/total_news.js';

console.log("TotalNews - ", TotalNews);

var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четверг, четвертого числа...'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт -мой сайт'
},
{
  author: 'Иванов Иван Иванович',
  text: 'Путешествия во времни'
},
{
  author: 'Первов Наполеонович',
  text: 'Уход от неизбезжного'
},
{
  author: 'Александр Свияш',
  text: 'Улыбнись, пока не поздно'
}
];

var App = React.createClass({
    render: function() {
        return (
            <div className="app_header">
                Всем привет, я компонент App!
                <table className="app_table">
                    <thead>
                        <tr>
                            <th>N</th>
                            <th>Autor</th>
                            <th>News</th>
                            </tr>
                        </thead>
                        <News data={my_news} />
                    </table>
                <TotalNews  data={my_news} />
                <Comments />
            </div>
        );
    }
});

export default App;
