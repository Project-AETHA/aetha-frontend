import { createContext, Component } from 'react';

export const LoginContext = createContext()

class LoginContextProvider extends Component {

    state = {
        authToken : ""
    }

    //* Logout Button
    setToken = (token) => {
        this.setState({authToken : token})
        localStorage.setItem("authToken", token)
    }

    removeToken = () => {
        this.setState({authToken : ""})
        localStorage.removeItem("authToken")
    }


    render () {

        return (

            <LoginContext.Provider value={{
                ...this.state, 
                setToken: this.setToken, 
                removeToken: this.removeToken
            }}>

                {this.props.children}

            </LoginContext.Provider>

        )

    }

}

export default LoginContextProvider