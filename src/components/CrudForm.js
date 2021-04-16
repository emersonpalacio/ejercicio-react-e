import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  PrimerApellido: "",
  SegundoApellido: "",
  PrimerNombre: "",
  OtroNombre: "",
  PaisDelEmpleo: "",
  TipoIdentificacion: "",
  NumeroIdentifiacion: "",
  CorreoElectronico: "",
  FechaIngreso: "",
  FeachaRegistro: "",
  Area: "",
  Estado: "",
};

export default function CrudForm({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!form.PrimerApellido) {
    //   alert("datos incompletos");
    //   return;
    // }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input type="submit" bvalue="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />

        <input
          onChange={handleChange}
          value={form.PrimerApellido}
          type="text"
          name="PrimerApellido"
          placeholder="Primer Apellido"
        />

        <input
          onChange={handleChange}
          value={form.SegundoApellido}
          type="text"
          name="SegundoApellido"
          placeholder="Segundo Apellido"
        />

        <input
          onChange={handleChange}
          value={form.PrimerNombre}
          type="text"
          name="PrimerNombre"
          placeholder="Primer Nombre"
        />

        <input
          onChange={handleChange}
          value={form.OtroNombre}
          type="text"
          name="OtroNombre"
          placeholder="Otro Nombre"
        />

        <input
          onChange={handleChange}
          value={form.PaisDelEmpleo}
          type="text"
          name="PaisDelEmpleo"
          placeholder="Pais Del Empleo"
        />

        <input
          onChange={handleChange}
          value={form.TipoIdentificacion}
          type="text"
          name="TipoIdentificacion"
          placeholder="Tipo de identificacion"
        />

        <input
          onChange={handleChange}
          value={form.NumeroIdentifiacion}
          type="text"
          name="NumeroIdentifiacion"
          placeholder="Numero Identifiacion"
        />

        <input
          onChange={handleChange}
          value={form.CorreoElectronico}
          type="text"
          name="CorreoElectronico"
          placeholder="Correo Electronico"
        />

        <input
          onChange={handleChange}
          value={form.FechaIngreso}
          type="text"
          name="FechaIngreso"
          placeholder="Fecha Ingreso "
        />

        <input
          onChange={handleChange}
          value={form.FeachaRegistro}
          type="text"
          name="FeachaRegistro"
          placeholder="Feacha Registro"
        />

        <input
          onChange={handleChange}
          value={form.Area}
          type="text"
          name="Area"
          placeholder="Area"
        />
      </form>
    </div>
  );
}
