import React from "react";
import Terminator from "../terminators/terminator.comp";

const TerminatorList = ({ models }) => {
  const terminatorComponents = models.map(model => {
    return (
      <Terminator
        key={model.id}
        id={model.id}
        name={model.name}
        serialNumber={model.serialNumber}
      />
    );
  });
  return <div className="row">{terminatorComponents}</div>;
};

export default TerminatorList;
