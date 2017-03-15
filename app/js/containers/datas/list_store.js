import myNews from './datas_news.js';
import myComments from './datas_commets.js';
import myArticle from './datas_article.js';
import myItem from './datas_item.js';
import assign from 'object-assign';
import uuid from 'uuid';
import { EventEmitter } from 'events';

import AppDispatcher from '../../AppDispatcher.js';

var ListStore =  assign({}, EventEmitter.prototype,{

    myItem: myItem,
    myNews: myNews,
    myComments: myComments,
    myArticle: myArticle,

    emitChange: function(data) {
        console.log('emitChange data -> ', data);
        this.emit(data);
    },

    getMyNews () {
      ListStore.myNews = myNews;
      console.log('getMyNews -> ListStore.myNews -> ', ListStore.myNews);
      return myNews;
    },

    // removeChangeListener: function(callback) {
    //     this.removeListener('change', callback);
    // },

    addChangeListener: function(callback) {
        // console.log('addChangeListener callback -> ', callback);
        this.on('change', callback);
    }
});

ListStore.dispatcherIndex = AppDispatcher.register(function(payload) {

});

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(payload.eventName) {
      case 'new-item':
          console.log(' new-item -> ListStore.items BEFORE -> ',  ListStore.myItem);
          ListStore.myItem.push(payload.newItem);
          console.log(' new-item -> ListStore.items AFTER -> ',  ListStore.myItem);
          ListStore.emitChange('change');
          break;
      case 'search':
          console.log('search -> ListStore.myNews BEFORE -> ', ListStore.myNews);
          ListStore.myNews = payload.newItem;
          console.log('search -> ListStore.myNews  AFTER-> ', ListStore.myNews);
          ListStore.emitChange('change');
          break;
      default:
        console.log('search -> ListStore.myNews  AFTER / AFTER-> ', ListStore.myNews)
        return true;
  }
  // ListStore.emitChange('change');
  return true;

});

export default ListStore;
