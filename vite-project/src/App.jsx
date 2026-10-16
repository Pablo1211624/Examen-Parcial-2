import List from "./componentes/List";

const list = [
  { name: "Raton", Precio: "Q15.00" },
  { name: "Teclado", Precio: "Q25.00" },
  { name: "audifonos", Precio: "Q30.00" },
];

const contenido = () => {
  return <List data={list} />;
};

function App() {
  return contenido();
}

export default App;
