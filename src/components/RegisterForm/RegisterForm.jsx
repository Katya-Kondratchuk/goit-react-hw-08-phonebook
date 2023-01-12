import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" placeholder="Name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" placeholder="Name@mail.com" />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          placeholder="Minimum 7 symbols"
        />
      </label>
      <Button type="submit" variant="contained" startIcon={<ExitToAppIcon />}>
        Register
      </Button>
    </form>
  );
};
