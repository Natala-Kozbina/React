import React from 'react';

export default ({ term, data, update }) => {
    // console.log('update -> ',update);
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();
        console.log('value - ', value);
        const filter = data.filter(user => {
            // console.log('user - ', user);
            // console.log('user.author - ', user.author.toLowerCase().includes(value));
            // return user.author;
            return user.author.toLowerCase().includes(value);
        });
        console.log('filter - ', filter);
        // update({
        //     data: filter,
        //     active: 0,
        //     term: value
        // });
        console.log('update - ', update({
            data: filter,
            active: 0,
            term: value
        }));
  };

  return (
     <div className="searchbar form-group col-sm-12">
        <input
            value={term}
            type="text"
            className="form-control"
            placeholder="Search people by name..."
            onChange={dataSearch}
        />
    </div>
    );
};
