import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const value = {
        // Add your context values here
        
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}