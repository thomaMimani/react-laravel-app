const { createContext, useState, useContext } = require("react");

const StateContext = createContext({})

export const ContextProvider = ({children})=>{
    const [currentUser,setCurrentUser] = useState()
    const [userToken,setUserToken] = useState()
    return(
        <StateContext.Provider value = {{
            currentUser,
            setCurrentUser,
            userToken,
            setCurrentUser
        }}>
             {children}
        </StateContext.Provider>
    )
}

export const userStateContext = useContext(StateContext)