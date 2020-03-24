import React from "react";

const Card = ({ id, email, name }) => {
  return (
    <div className="tc bg-light-white dib br3 pa3 ma2 bw2 grow shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt={`robot: ${name}`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
