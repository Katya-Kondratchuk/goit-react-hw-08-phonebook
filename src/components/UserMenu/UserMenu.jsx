import { useAuth } from 'hook/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button
        variant="contained"
        startIcon={<LogoutIcon />}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
};
