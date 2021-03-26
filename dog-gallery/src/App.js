import React, { useEffect, useState } from "react";
import BreedImages from "./BreedImages";
import Header from "./Header";
import Select from "./Select";

const App = () => {
  const [breedsList, setBreedsList] = useState(null);
  const [error, setError] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState(null);

  useEffect(() => {
    fetchAllBreeds();
  }, []);

  const fetchAllBreeds = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      if (res.ok) {
        const data = await res.json();
        setBreedsList(Object.keys(data.message));
      } else {
        setError(true);
        alert("The data cannot be displayed!");
      }
    } catch (e) {
      setError(true);
      alert("The data cannot be displayed!");
    }
  };

  const selectHandler = (breed) => {
    setSelectedBreed(breed);
  };

  return (
    <div className="app">
      <Header />
      <Select
        breedsList={breedsList}
        isError={error}
        onSelect={selectHandler}
      />
      <BreedImages breed={selectedBreed} />
    </div>
  );
};

export default App;
