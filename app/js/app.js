import "../css/main.scss"

import ReactDOM from 'react-dom';
import React from 'react';

import App from './containers/app/app_start.js';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//   firstName: 'Harry',
//   lastName: 'Potter'
// };
//
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, ' + formatName(user) + '!'
// );
//
// ReactDOM.render(
//     // <App>
//     // </App>,
//     element,
//      document.getElementById('react')
// );


// var App = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 7777
//             </div>
//         )
//     }
// })

ReactDOM.render(
    < App />,
    document.getElementById('react')
)
require ("../css/main.scss");
