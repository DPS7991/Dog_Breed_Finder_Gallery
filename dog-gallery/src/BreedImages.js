import React, { useEffect, useState } from "react";
import "./BreedImages.css";
// import RandomImage from "./RandomImage";

const BreedImages = (props) => {
  const [imageUrls, setImageUrls] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);

  useEffect(() => {
    if (props.breed !== selectedBreed) {
      setSelectedBreed(props.breed);
    }
    fetchImage();
  }, [props.breed, selectedBreed]);

  const fetchImage = async () => {
    if (selectedBreed == null) {
      return;
    }
    const res = await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images/random/3`
    );
    const data = await res.json();
    setImageUrls(data.message);
  };

  return (
    <div className="image__container">
      {imageUrls.map((img, index) => (
        <div>
          <img key={index} className="image__card" alt="dog" src={img} />
        </div>
      ))}
    </div>
  );
};

export default BreedImages;
