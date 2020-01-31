import React from "react";
import "./Card.css";

const Card = ({ user }) => {
  const { name, email, id } = user;
  return (
    <div className="card">
      <img alt={id} src={`https://robohash.org/${id}?set=set2`} />
      <h3>{name}</h3>
      <h4>{email}</h4>
    </div>
  );
};

export default Card;
