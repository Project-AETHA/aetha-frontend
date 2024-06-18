import { Button } from "@mui/material"




const LogOut = ({ removeToken }) => {
    return ( 
        <Button variant="contained" color="warning" onClick={removeToken}>Logout</Button>
     )
}
 
export default LogOut