import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

function Navbar() {
    return (
        <>
            <header>
                <Stack spacing={2} direction="row">
                    <div className="logo">Logo</div>

                    <nav>
                        <Stack spacing={2} direction="row">
                            <Button variant="text">Read</Button>
                            <Button variant="text">Write</Button>
                        </Stack>
                    </nav>

                    <div className="user">
                        <Stack spacing={2} direction="row">
                            <Button variant="contained">Login</Button>
                            <Button variant="contained">Signup</Button>
                        </Stack>
                    </div>
                </Stack>

            </header>
        </>
    )
}

export default Navbar