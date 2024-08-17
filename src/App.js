import { useState, useEffect } from "react";
import Toggle from "./Toggle";
import Content from './Content'

function App() {
  const [items, setItems] = useState([]);
  const [type, setType] = useState('users');

  useEffect(() => {
    console.log(type);
    const fetchItems = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
        const data = await response.json();
        setItems(Array.isArray(data) ? data : [data]);
      } catch (e) {
        console.log(e);
      }
    };

    fetchItems();
  }, [type]);

  return (
    <div className="App">
      <Toggle type={type} setType={setType} />
      <Content items={items} setItems={setItems} />

    </div>
  );
}

export default App;
