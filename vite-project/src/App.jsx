import List from "./componentes/List";
import { useEffect, useState } from "react";

const obtenerProductos = async () => {
  const respuesta = await fetch("/api/productos");
  const tipoContenido = respuesta.headers.get("content-type");

  if (!tipoContenido?.includes("application/json")) {
    throw new Error("El servidor no respondió con JSON");
  }

  const datos = await respuesta.json();

  if (!respuesta.ok) {
    throw new Error(datos.mensaje || "Error al obtener los productos");
  }

  if (!Array.isArray(datos)) {
    throw new Error("La respuesta de productos no es una lista");
  }

  return datos;
};

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let activo = true;

    obtenerProductos()
      .then((datos) => {
        if (activo) {
          setProductos(datos);
        }
      })
      .catch((err) => {
        if (activo) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (activo) {
          setCargando(false);
        }
      });

    return () => {
      activo = false;
    };
  }, []);

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return <List data={productos} />;
}

export default App;
