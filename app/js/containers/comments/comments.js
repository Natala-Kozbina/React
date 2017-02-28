import React from 'react';
import ReactDOM from 'react-dom';

var Comments = React.createClass({
  render: function() {
      var comment = this.props.comment;
      var commentTemplate;

      if(comment.length > 0) {
          commentTemplate = comment.map(function(item, index) {
            return (
                <p key={index}> комментарий № {index+1} - {item.comment}</p>
            )
          })
      } else {
          commentTemplate = <p> Новостей нет </p>
      }
       return (
           <div>
            { commentTemplate}
           </div>
       )
  }

});

export default Comments;
