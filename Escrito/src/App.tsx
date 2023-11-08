import axios from "axios";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !telefono) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (!/^\d{9}$/.test(telefono)) {
      setError("El número de celular debe tener 9 dígitos");
      return;
    }

    try {
      const response = await axios.post(
        "https://654acfad5b38a59f28ee3f86.mockapi.io/api/users",
        {
          name,
          email,
          telefono,
        }
      );

      console.log("Usuario creado:", response.data);
    } catch (error) {
      setError("error ");
    }
  };

  return (
    <div className="full">
      <div className="Body">
        <div className="title">
          <h1>Crear Usuario</h1>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Celular"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <br />
            <button type="submit">Crear</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
