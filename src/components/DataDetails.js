import React from "react";
import DataInformacion from "./DataInformacion";
import DataPersona from "./DataPersona";

const DataDetails = ({ search, data }) => {
  return (
    <div>
      <h2>Details</h2>
      <DataPersona />
      <DataInformacion />
    </div>
  );
};

export default DataDetails;
