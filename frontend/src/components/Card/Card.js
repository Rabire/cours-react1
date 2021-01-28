import React from "react";
import "./Card.scss";
// import hobbiesComponents from "../../assets/svg/hobbies/index";

export const Card = ({
  member: { picture, name, frontDescription, technologies, hobbies },
}) => {
  // const siteObject: <siteObject> = {
  //   id: "id",
  //   name: "id",
  //   description: "id",
  //   profilePicture: "id",
  //   backDescription: "id",
  //   button: "id",
  // };
  // Bebe mario

  return (
    <div className="card-wrap">
      <div className="card-inner">
        <div className="card-front">
          {picture && <img className="picture" src={picture} alt={name} />}
          <div className="card-info">
            <div className="card-text">
              <h2>{name}</h2>
              <p>{frontDescription}</p>
            </div>
          </div>
        </div>
        <div className="card-back">
          {picture && (
            <div>
              <img
                className="picture"
                src={`https://xh5b7ws4.tinifycdn.com/upload/250x333/jack-sparrow-250.jpg`}
                alt={name}
              />
              <p>Rabire</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
