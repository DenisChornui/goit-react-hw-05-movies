import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackLinkBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
