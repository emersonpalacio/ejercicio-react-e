import React from "react";
import CrudApi from "./components/CrudApi";
import DataSearch from "./components/DataSearch";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Login />

      {/* <DataSearch />
      <hr />
      <CrudApi />
      <hr /> */}
    </div>
  );
}

export default App;
