import React from "react";
import { Button } from "../Generic/Button";
import { Input } from "../Generic/Input";
import { Container, Icon, Advanced, Section } from "./style";
import { Popover } from "antd";

const Filter = () => {
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input width={"200px"} placeholder="Country" />
        <Input width={"200px"} placeholder="Region" />
        <Input width={"200px"} placeholder="City" />
        <Input width={"200px"} placeholder="Zip Code" />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input width={"200px"} placeholder="Adress" />
        <Input width={"200px"} placeholder="House Name" />
        <Input width={"200px"} placeholder="Rooms" />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input width={"200px"} placeholder="Min price" />
        <Input width={"200px"} placeholder="Max price" />
      </Section>
      <Section end>
        {/* <Button width='131px' ml={20} type='secondary'>
          Cancel
        </Button> */}
        <Button width="131px" ml={20} type={"primary"}>
          Search
        </Button>
      </Section>
    </Advanced>
  );

  return (
    <Container>
      <Input
        placecholder={"Enter an address, neighborhood, city, or ZIP code"}
        pl={"50px"}
        width={"100%"}
      >
        <Icon.Home />
      </Input>
      <Popover
        placement={"bottomLeft"}
        content={advancedSearch}
        trigger={"click"}
      >
        <Button width={"131px"} type={"secondary"}>
          <Icon.Setting />
          Advanced
        </Button>
      </Popover>
      <Button width={"131px"} type={"primary"}>
        <Icon.Search />
        Search
      </Button>
    </Container>
  );
};

export { Filter };
