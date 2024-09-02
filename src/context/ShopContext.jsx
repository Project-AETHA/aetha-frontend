import { createContext, useReducer } from 'react'

const initialState = {
    total: 0,
    ebooks: [],
    page: 1,
    pageLimit: 10,
    loading: false,
    errors: [],
    searchText: "",
    genres: [],
}

export const ShopContext = createContext(initialState)

const shopReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_BOOKS":
            console.log("SET_BOOKS" + payload)
            return { ...state, ebooks: payload }
        default:
            throw new Error(`Unhandled action type: ${type}`)
    }
}

export const ShopProvider = ({children}) => {
    const [state, dispatch] = useReducer(shopReducer, initialState)

    return (
        <ShopContext.Provider value={{state, dispatch}}>
            {children}
        </ShopContext.Provider>
    )
}