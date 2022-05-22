import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  ActiveStyle,
  Button,
  Container,
  Logo,
  NavbarBody,
  NavbarWrapper,
  Wrapper,
} from './style';
import { navbar } from '../../Utils/navbar';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper className='nocopy'>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate('/home')}>
            <Logo.Icon />
            <Logo.Text />
          </Logo>
          <NavbarBody>
            {navbar.map((value) => {
              return (
                !value.hidden && (
                  <NavLink style={ActiveStyle} key={value.id} to={value.path} className="description">
                    {value.title}
                  </NavLink>
                )
              );
            })}
          </NavbarBody>
          <Logo>
            <Button width={'120px'}>Signin</Button>
          </Logo>
        </NavbarWrapper>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;