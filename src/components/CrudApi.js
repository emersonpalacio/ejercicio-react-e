import React,{useState} from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';



export default function CrudApi() {
    const [db, setDb] = useState([])
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData =(data)=>{ 
      data.id= Date.now()
      console.log(data);
      setDb([...db, data]);      
    }

    const updateData =(data)=>{ 
       let newData = db.map(el => el.id=== data.id ? data: el)
       setDb(newData);
    };
    
    const deleteData =(id)=>{ 
      let isDelete = window.confirm(`estas seGuro de su eliminación ${id}`);
      if (isDelete) {
        let newData = db.filter(el => el.id !== id); 
        setDb(newData)
        
      }else{
        return;
      }
    };

    return (
       <div>
           <CrudForm createData={createData}
                     updateData ={updateData}
                     dataToEdit={dataToEdit}
                     setDataToEdit={setDataToEdit}/>
           <CrudTable data={db}
                      setDataToEdit={setDataToEdit}
                      deleteData={deleteData}   />
       </div>
    )
}
