import myNews from './datas_news.js';
import myComments from './datas_commets.js';
import myArticle from './datas_article.js';


var ListStore = {

   // Actual collection of model data
    items: [],

   // Accessor method we'll use later
    getMyNews: function() {
        return myNews;
    },

    getMyComments: function() {
        return myComments;
    },

    getMyArticle: function() {
        return myArticle;
    }
}

export default ListStore;
