import React from "react";
import "./Card.scss";
// import hobbiesComponents from "../../assets/svg/hobbies/index";

export const Card = ({
  member: { picture, name, job, technologies, hobbies },
}) => {
  const icons = technologies.map((technology, i) => (
    <img
      src={require(`../../assets/icons/${technology}-icon.png`)}
      alt={`${technology} logo`}
      key={`${technology}${i}`}
    />
  ));

  //   const hobbiesList = hobbies.map((hobby) => {
  //     const Hobby = hobbiesComponents[hobby];
  //     return <Hobby />;
  //   });

  return (
    <div className="card-wrap">
      <div className="card-inner">
        <div className="card-front">
          {picture && (
            <img
              className="picture"
              src={require(`../../assets/photos/${picture}.jpg`)}
              alt={name}
            />
          )}
          <div className="card-info">
            <div className="card-text">
              <h2>{name}</h2>
              <p>{job}</p>
            </div>
            <div className="icons-container">{icons}</div>
          </div>
        </div>
        <div className="card-back">
          {picture && (
            <img
              className="picture"
              src={require(`../../assets/photos/${picture}.jpg`)}
              alt={name}
            />
          )}
          <div className="card-info">
            {/* <div className="hobbies-container">{hobbiesList}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
