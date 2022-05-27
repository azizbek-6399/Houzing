import React from "react";
import { Filter } from "../Filter/index";
// import HouseCard from "../Generic/HouseCard";
import { Container, CardsWrapper } from "./style";

import HouseCarousel from "../Generic/HouseCarousel";



const Home = () => {
  return (
    <Container>
      <Filter />
      <HouseCarousel/>
    </Container>
  );
};

export { Home };
