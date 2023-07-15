import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react"

type userContext ={
    Name:string,
    setName:Dispatch<SetStateAction<string>>
}

export const UserNameCtx = createContext<userContext | null>(null)
export const UserContext=({children}:{children:ReactNode})=>{
    const [Name,setName] = useState("")
    return(
        <UserNameCtx.Provider value={{Name,setName}}>{children}</UserNameCtx.Provider>
    );
}

export const useNameCtx=()=>useContext(UserNameCtx);