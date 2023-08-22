import React from "react";
import "./SelectCard.css";

const SelectCard = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="selected-card">
      <div className="selected-card-details">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
        />
        <div className="username">
          <h1>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h1>
          <p>
            <span className="change-color">{user.location.street.number}</span>
            {`, ${user.location.street.name}, ${user.location.city}, ${user.location.state}, `}
            <span className="bold-text">{user.location.country}</span>
            {`, ${user.location.postcode}, ${user.location.timezone.offset}, `}
            <span className="border-line">{user.location.timezone.description}</span>
          </p>
          <p>{user.gender}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectCard;
