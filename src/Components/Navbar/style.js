import styled from 'styled-components';
import { ReactComponent as logoIcon } from '../../Assets/icons/logo.svg';
import { ReactComponent as logoText } from '../../Assets/icons/Houzing.svg';
import '../../index.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 64px;
  width: var(--width);
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  color: #ffffff;
  padding: 0 130px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

Logo.Icon = styled(logoIcon)``;
Logo.Text = styled(logoText)`
  margin-left: 12px;
`;

const NavbarBody = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  background: var(--primaryColor);
`;

const ActiveStyle = ({ isActive }) => {
  return {
    color: isActive ? 'white' : 'white',
    textDecoration: 'none',
    margin: ' 0 32px',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '24px',
  };
};

export const Button = styled.button`
  color: #fff;
  width: 120px;
  height: 44px;
  border: 1px solid #ffffff;
  border-radius: 2px;
  background: transparent;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
`;

export { Container, Wrapper, NavbarWrapper, NavbarBody, ActiveStyle, Logo };