import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-background">
        <h1>Healthy Eats</h1>
        <button onClick={() => navigate("/grocery-list")}>
          View Grocery List
        </button>
      </div>
    </>
  );
};

export default Home;
