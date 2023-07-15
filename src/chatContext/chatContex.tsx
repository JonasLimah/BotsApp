import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react"
import { MsgType } from "../../types/msgType"
import { ChatReducer, TypeActions } from "@/app/chatReducer/chatReducer"

type ChatContext ={
    chats:Array<MsgType>
    dispatch:Dispatch<TypeActions>
}

export const ChatCtx = createContext<ChatContext>({chats:[],dispatch:()=>null})
export const ChatCtxProvider =({children}:{children:ReactNode})=>{
    
    const [chats,dispatch] = useReducer(ChatReducer,[])
    return(
        <ChatCtx.Provider value={{chats,dispatch}}>{children}</ChatCtx.Provider>
    );
}

export const useContextChat=()=>useContext(ChatCtx);