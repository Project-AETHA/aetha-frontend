import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

//? Importing icons
import HomeIcon from "@mui/icons-material/Home";

function Navbar() {
  return (
    <header className="bg-white p-3 w-full shadow-lg">
      <Stack spacing={2} direction="row" className="flex justify-between items-center">
        <Link to="/">
          <Button className="logo text-white font-bold text-xl">Logo</Button>
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
          </Stack>
        </nav>

        <div className="user">
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
        </div>
      </Stack>
    </header>
  );
}

export default Navbar;
