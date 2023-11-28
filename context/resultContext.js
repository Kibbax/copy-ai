"use client"
import { createContext, useContext, useState } from "react";  

export const ResultContext = createContext()

export const useResult = () => useContext(ResultContext)

export const ResultProvider = ({children}) => {
    const [result, setResult] = useState(null)

    const newResult = (res) => {
        setResult(res)
     }

    return(
        <ResultContext.Provider value={{result, newResult}}>
            {children}
        </ResultContext.Provider>
    ) 
}