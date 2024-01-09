import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bookoe-navigation">
      <h1>Homepage</h1>
      <p className="headline">Home Page</p>
      <ul>
        <li>
          <Link to="home1">Home1</Link>
        </li>
        <li>
          <Link to="latest">Latest</Link>
        </li>
        <li>
          <Link to="search">Search</Link>
        </li>
        <li>
          <Link to="search404">Search404</Link>
        </li>
        <li>
          <Link to="singlebook">SingleBook</Link>
        </li>
        <li>
          <Link to="fourhundredfour">FourHundredFour</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
