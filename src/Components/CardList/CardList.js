import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ users }) => {
  return (
    <div className="card-list">
      {users.map(user => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default CardList;
