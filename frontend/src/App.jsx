import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [mensagem, setMensagem] = useState("Carregando...");

  useEffect(() => {
    axios.get("http://localhost:8000/api/teste")
      .then(response => setMensagem(response.data.mensagem))
      .catch(() => setMensagem("Erro ao conectar à API"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{mensagem}</h1>
    </div>
  );
}

export default App;
