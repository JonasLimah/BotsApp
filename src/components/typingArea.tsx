import { useNameCtx} from "@/chatContext/userNameCtx";
import { KeyboardEvent, useState } from "react";
import { MessageArea } from "./messageArea";


export const TypingArea=()=>{
    const user = useNameCtx()
    const [userName,setUserName] = useState('')
    const handleKeyUp = (event:KeyboardEvent)=>{
        if(userName.trim() !== "" && userName.trim().toLocaleLowerCase() !== "bot"){
            if(event.key === "Enter"){
                user?.setName(userName)
            }
           
        }
    }
    return(
        <div className="
        absolute 
        left-0 
        right-0 
        bottom-0 
        flex-1 
        h-40 
        bg-black/30 
        rounded
        m-1
        flex
        flex-col
        justify-center
        items-center
        ">
        {!user?.Name &&
            
            <div className="m-2 max-w-full text-black">
                <input value={userName} onChange={e=>setUserName(e.target.value)} onKeyUp={handleKeyUp}  id="name"  className="rounded w-96 p-1 outline-none" type="text" placeholder="Para iniciar o chat insira seu nome!" />
            </div>
        }
           
        {user?.Name && 
            <MessageArea />
        }
  
        </div>
    );
}