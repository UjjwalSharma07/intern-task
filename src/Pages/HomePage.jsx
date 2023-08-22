import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./HomePage.css";
import SelectCard from "../components/selected-card/SelectCard";
import Card from "../components/Card/Card";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
    )
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };
  return (
    <div className="HomePage">
      <Navbar />
      <div className="container">
        <SelectCard user={selectedUser} />
        <div className="user-cards">
          {users.map((user, index) => (
            <Card key={index} user={user} onClick={handleUserClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
