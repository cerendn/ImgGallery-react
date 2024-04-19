import "./App.css";
import React, { useState } from "react";
import Images from "./images";

function App() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="selected" className="selected" />
      </div>
      <div className="imgContainer">
        {Images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="oil"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
