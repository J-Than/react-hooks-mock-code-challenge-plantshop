import React, { useState } from "react";

function NewPlantForm({ onNewPlantSubmit }) {

  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleInput(e) {
    setNewPlant({...newPlant,
      [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    onNewPlantSubmit(newPlant);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleInput} />
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleInput} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleInput} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
