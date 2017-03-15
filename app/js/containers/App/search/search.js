import React from 'react';

export default ({ term, data, update, selectedField }) => {
  // console.log('searchbar - data -> ', data);
  // console.log('searchbar - update -> ', update);
  // console.log('searchbar - term -> ', term);
  // console.log('searchbar - selectedField -> ', selectedField);
    const dataSearch = e => {
      console.log('dataSearch data -> ',data);
      console.log('dataSearch selectedField -> ',selectedField);
        const value = e.target.value.toLowerCase();
        // const filter;
        // if(selectedField) {
          // const filter = data.filter(user => {
          //     console.log(' filter user -> ', user);
          //     return user[selectedField].toLowerCase().includes(value);
          // });
          const filter = data.filter(user => {
              console.log(' filter user -> ', user);
              console.log(' filter selectedField -> ', selectedField);
              return user[selectedField].toLowerCase().includes(value);
          });
        // }

        update({
            data: filter,
            active: 0,
            term: value
        });
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
