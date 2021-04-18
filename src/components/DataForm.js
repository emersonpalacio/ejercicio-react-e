import React, { useState } from "react";

const initialForm = {
  PrimerNombre: "",
};

const DataForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.PrimerNombre) {
      alert("Nombre No Encontrado");
      return;
    }

    handleSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={form.PrimerNombre}
          type="text"
          name="PrimerNombre"
          placeholder="PrimerNombre"
        />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default DataForm;
