import { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate } from 'react-router-dom';

import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function LoginPage() {
  const { authToken, setToken } = useContext(LoginContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const loginRequest = {
      username: username,
      password: password,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/user/login",
        loginRequest
      );

      if (res.status === 200) {
        // console.log("Jwt : " + res.data.jwtToken);

        //* Update the auth token with the received token
        setToken(res.data.jwtToken);

        //* Redirect to HomePage
        navigate('/home');

      } else {
        console.log(res);
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        console.log(err.response.data.message);
      } else {
        console.error(err);
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      <h1>Login Page</h1>
      <form
        method="post"
        className="w-full p-4 flex flex-col justify-center items-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="input_field">
          <TextField
            type="text"
            id="username"
            label="Username"
            variant="outlined"
            suggested="username"
            autoComplete="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="input_field">
          <TextField
            type="password"
            id="password"
            label="Password"
            variant="outlined"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        {!isLoading && (
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        )}

        {isLoading && <CircularProgress />}
      </form>
    </>
  );
}

export default LoginPage;