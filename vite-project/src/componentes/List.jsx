function List({ data }) {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div className="row fw-bold">
          <div className="col-3">ID</div>
          <div className="col-3">Producto</div>
          <div className="col-3">Precio</div>
          <div className="col-3">Stock</div>
        </div>
      </li>
      {data.map((item) => (
        <li
          key={item.ID}
          className="list-group-item"
        >
          <div className="row">
            <div className="col-3">{item.ID}</div>
            <div className="col-3">{item.Nombre}</div>
            <div className="col-3">Q{Number(item.Precio).toFixed(2)}</div>
            <div className="col-3">{item.Stock}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
