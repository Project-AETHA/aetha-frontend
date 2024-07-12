import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const navigate = useNavigate()

    const handleLogout = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("user")

        dispatch({ type: "LOGOUT" })
        navigate("/login")

    }
    return {
        handleLogout
    }
}