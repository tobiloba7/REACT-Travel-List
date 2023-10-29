/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
// import "./index.css";

import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "chargers", quantity: 32, packed: false },
];

function App() {
  // whenever multiple sibling components need a single function or state, add it to the parent element

  // items state is raised to the parent component to serve a child(packingLish)
  // default state is set to an empty array because the data(initialItems) you want to update is an array
  const [items, setItems] = useState(initialItems);

  //handleAddNewItems updates the items state by spreading the current state and appending the new item.
  function handleAddNewItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      {/* passing this function as a prop because it is needed in the form component to add items */}
      <Form onAddItems={handleAddNewItems} />
      {/* passing the items as props to the packingList */}
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
