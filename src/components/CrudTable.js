import React from 'react'
import CrudTableRow from './CrudTableRow'



export default function CrudTable({data, setDataToEdit,deleteData}) {   
   console.log(data);
    return (
        <div>
        <h3>tabla de datos</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Constelación</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
              { 
                data.length === 0 ? (
                    <tr>
                    <td colSpan="3">Sin datos</td>
                    </tr>
                ) : (
                    data.map((el) => <CrudTableRow key={el.id} 
                                                   el={el} 
                                                   deleteData={deleteData}
                                                   setDataToEdit={setDataToEdit}/>)
                )
              }   

            {console.log( data.map)}      
           
          </tbody>
        </table>
      </div>
    )
}
