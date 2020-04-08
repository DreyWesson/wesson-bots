import React from "react";

const SearchBox = ({ onSearch }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search robot..."
        className="pa3 ba b--light-silver br3 grow"
        aria-label="Search button"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBox;
