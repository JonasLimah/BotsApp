import {  useContextChat } from "@/chatContext/chatContex";
import { useNameCtx } from "@/chatContext/userNameCtx";
import { KeyboardEvent, useState } from "react";

export const MessageArea=()=>{
    const chat = useContextChat()
    const user = useNameCtx()
    const [useMsg,setUseMsg] = useState('')
    const [botMsg,setBotMsg] = useState('')
    const handleKeyUpUser =(event:KeyboardEvent)=>{
        if(user){
            if(event.key === "Enter"){
                chat.dispatch({
                    type:"add",
                    payload:{
                        name:user.Name,
                        text:useMsg.trim()
                    }
                })
                setUseMsg('')
            }
        }
            
            
    }
    const handleKeyUpBot =(event:KeyboardEvent)=>{
        if(user){
            if(event.key === "Enter"){
                chat.dispatch({
                    type:"add",
                    payload:{
                        name:"bot",
                        text:botMsg.trim()
                    }
                })
                setBotMsg('')
            } 
           
    }
   }
    return(
        <>
                
            <div className="text-black m-2 max-w-full">
                <input onKeyUp={handleKeyUpUser} value={useMsg} onChange={e=>setUseMsg(e.target.value)} className="rounded w-96 p-1 outline-none" type="text" placeholder="User Mensage" />
            </div>
            <div className="text-black m-2 max-w-full">
                    <input onKeyUp={handleKeyUpBot} value={botMsg} onChange={e=>setBotMsg(e.target.value)} className="rounded w-96 p-1 outline-none" type="text" placeholder="Bot Mensage" />
            </div>
        
        </>
    );
}