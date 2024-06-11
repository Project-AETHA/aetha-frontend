import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

function Navbar() {
    return (
        <>
            <header className='container bg-gray-800 p-3 m-auto'>
                <Stack spacing={2} direction="row" className='flex justify-between items-center'>
                    <div className="logo text-white">Logo</div>

                    <nav>
                        <Stack spacing={2} direction="row">
                            <Button variant="outlined">Read</Button>
                            <Button variant="outlined">Write</Button>
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