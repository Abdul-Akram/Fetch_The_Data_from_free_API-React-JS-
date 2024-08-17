import React from "react";

const Content = ({ items, setItems }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
