import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="randmon" src={img + "?grayscale"} />

    <img
      className="food-img"
      alt="sushi"
      src="https://izzycooking.com/wp-content/uploads/2022/04/Sushi-01.jpg"
    />
    <img
      className="food-img"
      alt="pizza"
      src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg"
    />
    <img
      className="food-img"
      alt="steak"
      src="https://assets.bonappetit.com/photos/57ad5452f1c801a1038bcb97/1:1/w_2240,c_limit/perfect-porterhouse-steak.jpg"
    />
  </div>,
  document.getElementById("root")
);
