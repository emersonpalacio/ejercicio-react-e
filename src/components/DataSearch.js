import React, { useState, useEffect } from "react";
import { helpHttp } from "../helper/helpHttp";
import DataDetails from "./DataDetails";

import DataForm from "./DataForm";
import Loader from "./Loader";

const DataSearch = () => {
  const [search, setSearch] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;
    const fetchData = async () => {
      const { PrimerNombre } = search;
      let peronsUrl = `  http://localhost:8000/santos/${PrimerNombre}`; //mi enpoint
      console.log(peronsUrl);

      setLoading(true);

      const [personRes] = await Promise.all([helpHttp().get(personRes)]);
      console.log(personRes);
      setData(personRes);

      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Buscar usuario</h2>

      {loading && <Loader />}

      <DataForm handleSearch={handleSearch} />
      <DataDetails search={search} data={data} />
    </div>
  );
};

export default DataSearch;
