import React from 'react';

export default ({ term, data, update, selectedField }) => {
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();
        const filter = data.filter(user => {
            return user[selectedField].toLowerCase().includes(value);
        });
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
