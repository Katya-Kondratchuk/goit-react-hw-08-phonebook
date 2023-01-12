import { useAuth } from 'hook/useAuth';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import css from './Navigation.module.css';

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

export const Navigation = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <nav>
      {!user.name && (
        <LinkStyled className={css.link} to="/">
          Home
        </LinkStyled>
      )}
      {isLoggedIn && (
        <LinkStyled className={css.link} to="/contacts">
          Contacts
        </LinkStyled>
      )}
    </nav>
  );
};
