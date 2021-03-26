import React from "react";
import "./Select.css";
import "./BreedImages.css";

const Select = (props) => {
  const handleChange = (e) => {
    props.onSelect(e.target.value);
  };

  const getErrorView = () => {
    return alert("The data cannot be displayed");
  };

  const selectView = () => {
    return (
      <select onChange={handleChange}>
        {props.breedsList.map((breed, index) => {
          return (
            <option value={breed} key={index}>
              {breed}
            </option>
          );
        })}
      </select>
    );
  };

  return (
    <div className="select-container">
      {props.breedsList ? selectView() : null}
      {props.isError ? getErrorView() : null}
    </div>
  );
};

export default Select;
