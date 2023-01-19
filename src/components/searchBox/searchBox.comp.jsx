import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="col-12">
      <input
        type="search"
        placeholder="Search modell"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
