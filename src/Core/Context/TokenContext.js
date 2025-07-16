import { createContext, useState } from "react";


export let userContext = createContext();

export default function UserContextProvider(myProps) {

    const [userToken, setUserToken] = useState(null)

    return <userContext.Provider value={{ userToken, setUserToken }}>
        {myProps.children}
    </userContext.Provider>
}