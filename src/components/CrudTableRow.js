import React from 'react'


export default function CrudTableRow({el,setDataToEdit, deleteData}) {
    const {name, constellation, id} = el
    return (
      <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
          <button onClick={()=> setDataToEdit(el)}> Editar</button>
          <button onClick={()=> deleteData(id)}> Elimiar</button>          
        </td>
      </tr>
    )
}
