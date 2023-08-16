import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "../images/main_header.png";
import { Container } from "react-bootstrap";

const MainHeader = () => {
  return (
    <header className="main__header">
     <Container>
      <div className="Container main__header-container">
        <div className="main_header-left">
          <h4>#100DAYSOFWORKOUT</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p className="text-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum hic
            blanditiis doloribus. Delectus, sit ea!
          </p>
          <Link to="/plans">
            {" "}
            <Button className="px-4 py-2 fs-3" size="lg" variant="primary">
              Get Starterd
            </Button>
          </Link>
        </div>

        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      </Container>
    </header>
  );
};

export default MainHeader;
