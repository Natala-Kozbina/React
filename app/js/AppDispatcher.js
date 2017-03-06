var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function(action) {
     console.log('VIEW_ACTION', action);

     this.dispatch({
         eventName: 'VIEW_ACTION',
         newItem: action
     });
}
// module.exports = AppDispatcher;
export default AppDispatcher;
