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
  FechaRegistro: "",
  Area: "",
  Estado: "",
};

export default function CrudForm({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
  el,
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
    if (
      !form.PrimerApellido ||
      !form.SegundoApellido ||
      !form.PrimerNombre ||
      !form.OtroNombre ||
      !form.PaisDelEmpleo ||
      !form.NumeroIdentifiacion ||
      !form.NumeroIdentifiacion ||
      !form.CorreoElectronico ||
      !form.FechaIngreso ||
      !form.FechaRegistro ||
      !form.Area
    ) {
      alert("datos incompletos");
      return;
    }
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
      <h1>{dataToEdit ? "Editando Registros" : "Agregar Resgistros"}</h1>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />

        <input
          onChange={handleChange}
          value={form.PrimerApellido}
          type="text"
          name="PrimerApellido"
          placeholder="Primer Apellido"
          id="apellido"
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
          id="nombre"
        />

        <input
          onChange={handleChange}
          value={form.OtroNombre}
          type="text"
          name="OtroNombre"
          placeholder="Otro Nombre"
        />

        <select
          onChange={handleChange}
          value={form.PaisDelEmpleo}
          type="text"
          name="PaisDelEmpleo"
          placeholder="País Del Empleo"
        >
          <option>Opsión obligatoria *</option>
          <option>Colombia</option>
          <option>Estados unidos</option>
        </select>

        <select
          onChange={handleChange}
          value={form.TipoIdentificacion}
          type="text"
          name="TipoIdentificacion"
          placeholder="Tipo de identificación"
        >
          <option>Opsión obligatoria *</option>
          <option>Cédula de Ciudadanía</option>
          <option>Cédula de Extranjería</option>
          <option>Pasaporte</option>
          <option>Permiso Especial</option>
        </select>

        <input
          onChange={handleChange}
          value={form.NumeroIdentifiacion}
          type="text"
          name="NumeroIdentifiacion"
          placeholder="Numero Identificación"
        />

        <input
          onChange={handleChange}
          value={form.CorreoElectronico}
          type="email"
          name="CorreoElectronico"
          placeholder="Correo Electrónico"
          id="correo"
        />

        {function PasarValor() {
          document.getElementById("nombre2").value = document.getElementById(
            "nombre1"
          ).value;
        }}

        <input
          onChange={handleChange}
          value={form.FechaIngreso}
          type="text"
          name="FechaIngreso"
          placeholder="Fecha Ingreso "
        />

        <input
          onChange={handleChange}
          value={form.FechaRegistro}
          type="text"
          name="FechaRegistro"
          placeholder="Fecha Registro"
        />

        <select
          onChange={handleChange}
          value={form.Area}
          type="text"
          name="Area"
          placeholder="Área"
        >
          <option>Opsión obligatoria *</option>
          <option>Administración</option>
          <option>Financiera</option>
          <option>Compras</option>
          <option>Infraestructura</option>
          <option>Operación</option>
          <option>Talento Humano</option>
          <option>Servicios Varios</option>
        </select>

        <select
          onChange={handleChange}
          value={form.Estado}
          type="text"
          name="Estado"
          placeholder="Activo"
          disabled="true"
        >
          <option selected value="true">
            Activo
          </option>
        </select>
      </form>
    </div>
  );
}
