import { useContextChat } from "@/chatContext/chatContex";
import { useNameCtx } from "@/chatContext/userNameCtx";
import { useState } from "react";

export const ChatArea=()=>{
    const user = useNameCtx()
    const chat = useContextChat()
    const [show,setShow] = useState(false)
    const handleModal=()=>{
        setShow(!show)
    }
    const handleDel = (id:number)=>{
        setShow(!show)
        if(chat.chats.find(i=>i.id === id)){
            
            chat.dispatch({
                type:"del",
                payload:{
                    id
                }
            })
        }
        
    }
    const handleEdite=(id:number)=>{
        const user = chat.chats.find(i =>i.id === id)
        if(!user)return false;
        const newText = window.prompt("editar menssagem",user?.text)
        if(!newText || newText.trim() === "")return false;
        
        chat.dispatch({
            type:"edit",
            payload:{
                id,
                newText:newText.trim()
            }
        })
    }   
    return(
        <div className="overflow-y-auto flex flex-col h-96 w-full m-1 rounded bg-black/30  ">
            {user?.Name && 
           
                chat.chats.map((item)=>(
                    <>
                        
                    <li onClick={handleModal}  key={item.id} className={`
                    bg-transparent cursor-pointer ${item.name === "bot"?"self-start":"self-end"}  border rounded p-1 m-1 flex flex-col max-w-full
                    `}>
                        <h1>{item.name}</h1>
                        <p> 
                            {item.text}
                            {show && 
                            <div >
                                <span className=" border m-1 p-1 rounded text-xs" onClick={()=>handleDel(item.id)}> Deletar  </span>
                                <span onClick={()=>handleEdite(item.id)} className="border m-1 p-1 rounded text-xs"> Edite</span>
                            </div>}
                        </p>
                    </li>
                   
                    </>
                   
                ))
                    
                    
                
                }
          
        </div>
    );
}