import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plantList, setPlantList] = useState([]);
  const [filteredPlantList, setFilteredPlantList] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => {setPlantList(data); setFilteredPlantList(data)})
  }, [])

  function handleSearch(search) {
    setSearchTerms(searchTerms => searchTerms = search)
    setFilteredPlantList(search!=="" ?
      plantList.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase())) :
      plantList);
  }

  function handleNewPlantSubmit(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": newPlant.name,
        "image": newPlant.image,
        "price": newPlant.price
      })
    })
    .then(r => r.json())
    .then(data => setPlantList([...plantList, data]))
  }

  return (
    <main>
      <NewPlantForm onNewPlantSubmit={handleNewPlantSubmit} />
      <Search onSearch={handleSearch} currentSearch={searchTerms} />
      <PlantList plants={filteredPlantList} />
    </main>
  );
}

export default PlantPage;
