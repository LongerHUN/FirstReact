import React from "react";

const Terminator = ({ id, name, serialNumber }) => {
  return (
    <div className="col-4">
      <img src={`https://robohash.org/${id}?size=180x180`} alt="terminator" />
      <h2 className="numberh2">{name}</h2>
      <p>SN:{serialNumber}</p>
    </div>
  );
};

export default Terminator;
