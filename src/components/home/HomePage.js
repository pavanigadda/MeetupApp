import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <>
    <div className="jumbotron content-page">
      <h1>My Home Page</h1>
      <p>Let us do some magic with Meetup api</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn More
      </Link>
    </div>
  </>
);

export default HomePage;
