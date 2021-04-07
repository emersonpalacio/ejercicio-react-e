import React  from 'react'
import CrudApi from './components/CrudApi';
import CrudApp from './components/CrudApp';

function App() {
  return (
    <div className="App">
      <h1>Ejercicio Form</h1>
      <CrudApi/>
       <hr/>  
       <br/>    
        <CrudApp/>
        <hr/>       
    </div>
  );
}

export default App;
