import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './AuthNav.module.css';

const LinkStyled = styled(NavLink)`
  color: #3358bd;

  text-decoration: none;
  font-size: 35px;
  font-weight: 700;
  &.active {
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
  }
`;

export const AuthNav = () => {
  return (
    <div>
      <LinkStyled className={css.link} to="/register">
        Register
      </LinkStyled>
      <LinkStyled className={css.link} to="/login">
        Log In
      </LinkStyled>
    </div>
  );
};
