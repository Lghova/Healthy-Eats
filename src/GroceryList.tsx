import React, { useState, useEffect } from "react";
import "./GroceryList.css";

interface Item {
  name: string;
  checked: boolean;
}

const GroceryList: React.FC = () => {
  // Load items from local storage or use the default list if empty
  const getSavedItems = (): Item[] => {
    const savedItems = localStorage.getItem("groceryList");
    return savedItems
      ? JSON.parse(savedItems)
      : [
          { name: "Bananas", checked: false },
          { name: "Apples", checked: false },
          { name: "Bread", checked: false },
        ];
  };

  const [items, setItems] = useState<Item[]>(getSavedItems);
  const [newItem, setNewItem] = useState<string>("");

  // Save items to local storage whenever the list updates
  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(items));
  }, [items]);

  const handleCheck = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].checked = !updatedItems[index].checked;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    if (newItem) {
      setItems([...items, { name: newItem, checked: false }]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <>
      <div className="grocery-list-container">
        <h1>Grocery List</h1>
        <ul className="grocery-list">
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "5px",
              }}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(index)}
              />
              <p
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                  marginTop: 0,
                }}
              >
                {item.name}
              </p>
              <button
                style={{
                  margin: 0,
                }}
                onClick={() => handleRemoveItem(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="New Item"
          />
          <button onClick={handleAddItem}>+</button>
        </div>
      </div>
    </>
  );
};

export default GroceryList;
