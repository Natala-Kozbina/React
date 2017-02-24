import "../css/main.scss"

import ReactDOM from 'react-dom';
import React from 'react';


// import app from './containers/app/index.js';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harry',
  lastName: 'Potter'
};

// const element = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, ' + formatName(user) + '!'
);

ReactDOM.render(
    // <app />
    element,
     document.getElementById('react')
);

console.log(1);

require ("../css/main.scss");
