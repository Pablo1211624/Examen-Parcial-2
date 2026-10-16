import { useState } from "react";

const onSelect = (e) => {};

function List({ data }) {
  const [index, setIndex] = useState(0);

  return (
    <ul className="list-group">
      {data.map((item, i) => (
        <li
          key={i}
          className={`list-group-item ${i === index ? "active" : ""}`}
          onClick={() => {
            setIndex(i);
            onSelect(item);
          }}
        >
          <div className="row">
            <div className="col-6">{item.name}</div>
            <div className="col-6">{item.Precio}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
