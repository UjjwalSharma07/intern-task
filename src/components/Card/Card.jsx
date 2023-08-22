import React, { useState } from "react";
import "./Card.css";

const Card = ({ user, onClick }) => {
  const [bg, setBg] = useState(false);
  const handleUserClick = () => {
    onClick(user);
    setBg(true);
  };
  const handleUserClick2 = () => {
    onClick(user);
    setBg(false);
  };
  
  return (
    <>
      {bg === false ? (
        <div
          className="user-card"
          onClick={handleUserClick}
        >
          <div className="gender">{user.gender} .NL</div>
          <h2 className="name">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
          <div className="email">{user.email}</div>
        </div>
      ) : (
        <div
          className="user-card2"
          onMouseOut={handleUserClick2}
        >
          <div>{user.gender} .NL</div>
          <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
          <div>{user.email}</div>
        </div>
      )}
    </>
  );
};

export default Card;
