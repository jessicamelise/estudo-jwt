import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import { loginExistingUser, sendData } from '../../service/api';

import "./styles.css";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [user, setUser] = useState({});

  async function handleLogin(event) {
    event.preventDefault();
    const verifyRegister = await sendData(email, password);
    // setUser(verifyAuth);

    if (verifyRegister.accessToken) {
      localStorage.setItem("token", verifyRegister.accessToken);
      localStorage.setItem("user-email", verifyRegister.user.email);
      history.push(`/home`);
    } else {
      const login = await loginExistingUser(email, password);
      localStorage.setItem("token", login.accessToken);
      localStorage.setItem("user-email", login.user.email);
      history.push('/home');
    }

  }

  function handleChangeInputEmail(value) {
    setEmail(value.target.value);
  }

  function handleChangeInputPassword(value) {
    setPassword(value.target.value);
  }

  function handleClickShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <Fragment>
      <nav className="nav-footer-container"></nav>
      <form className="form-container" onSubmit={handleLogin}>
        <section className="section-login">
          <div className="login-container">
            <h4>Login</h4>
            <TextField
              required
              error={email === ""}
              value={email}
              onChange={handleChangeInputEmail}
              id="user-email"
              label="Email"
              variant="outlined"
              size="small"
              helperText={email ? "" : "required"}
            />

            <FormControl variant="outlined" size="small" required error={password === ""} >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                required
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handleChangeInputPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
              {!password &&
                <FormHelperText id="component-error-text">required</FormHelperText>
              }
            </FormControl>

            <button className="button-login" type="submit">Entrar</button>
          </div>
        </section>
      </form>
      <footer className="nav-footer-container"></footer>
    </Fragment>

  );
}

export default Login;