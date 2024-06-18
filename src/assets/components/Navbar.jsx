import { useContext, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";

//? Importing icons
import HomeIcon from "@mui/icons-material/Home";
import { LoginContext } from "../contexts/LoginContext";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const { authToken, removeToken } = useContext(LoginContext);

  useEffect(() => {
    // Check if the authToken is in localStorage and set the loggedIn state
    const token = localStorage.getItem("authToken");
    setLoggedIn(!!token);
  }, [authToken]);

  return (
    <header className="bg-white p-3 w-full shadow-lg">
      <Stack
        spacing={2}
        direction="row"
        className="flex justify-between items-center"
      >
        <Link to="/">
          <Button className="logo text-black font-bold text-xl">Logo</Button>
        </Link>

        <nav>
          <Stack spacing={2} direction="row">
            <Link to="/home">
              <Button variant="outlined" startIcon={<HomeIcon />}>
                Home
              </Button>
            </Link>

            <Button variant="outlined">Read</Button>
            <Button variant="outlined">Write</Button>

            <Link to="/all-users">
              <Button variant="outlined" startIcon={<HomeIcon />}>
                Users
              </Button>
            </Link>
          </Stack>
        </nav>

        <div className="user">
          {!loggedIn ? (
            <Stack spacing={2} direction="row">
              <Link to="/login">
                <Button variant="contained" color="primary">
                  Login
                </Button>
              </Link>

              <Link to="/signup">
                <Button variant="contained" color="secondary">
                  Signup
                </Button>
              </Link>
            </Stack>
          ) : (
            <LogOut removeToken={removeToken} />
          )}
        </div>
      </Stack>
    </header>
  );
}

export default Navbar;
