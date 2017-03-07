import myNews from './datas_news.js';
import myComments from './datas_commets.js';
import myArticle from './datas_article.js';
import assign from 'object-assign';
import uuid from 'uuid';
import { EventEmitter } from 'events';

import AppDispatcher from '../../AppDispatcher.js';
console.log('uuid -> ', uuid);

var ListStore =  assign({}, EventEmitter.prototype,{

    items: [
        {
            id: uuid(),
            value: 'Nata'
        }
    ],

    getAll: function() {
        return this.items;
    },

    getMyNews: function() {
        return myNews;
    },

    emitChange: function(data) {
        console.log('emitChange data -> ', data);
        this.emit(data);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    getMyComments: function() {
        return myComments;
    },

    getMyArticle: function() {
        return myArticle;
    }
});

ListStore.dispatcherIndex = AppDispatcher.register(function(payload) {

});

AppDispatcher.register(function(payload) {
  var action = payload.action;
  console.log('payload -> ', payload);
  switch(payload.eventName) {
    case 'new-item':
      // Вызвать внутренний метод на основании полученного Действия
       console.log('ListStore -> ', ListStore);
       ListStore.items.push(payload.newItem);
       console.log('ListStore.items -> ', ListStore.items);
       ListStore.emitChange('change');
      break;

    default:
      return true;
  }

  // Если Действие было обработано, создать событие "change"
  // ListStore.emitChange('change');

  return true;

});

export default ListStore;
