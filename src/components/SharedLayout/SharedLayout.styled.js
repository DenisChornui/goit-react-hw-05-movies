import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: orange;
  }
`;

export const Header = styled.header`
  height: 50px;
  box-shadow: 0px 5px 10px 2px rgba(72, 70, 202, 0.2) inset;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  padding: 20px;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;
