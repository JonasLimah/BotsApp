'use client'


import { ChatCtxProvider } from "@/chatContext/chatContex";
import { UserContext } from "@/chatContext/userNameCtx";
import { ChatArea } from "@/components/chatArea";
import { TypingArea } from "@/components/typingArea";

export default function Home(){

  return(
    <UserContext>
      <ChatCtxProvider>
        <div className="
      flex
      justify-center
      m-2
      border
      rounded
      h-screen
      bg-white/20
      relative
      ">
        <ChatArea/>
        <TypingArea/>
      </div>
      <div className="absolute text-white font-bold font-sans bottom-44 text-3xl left-40 md:left-[46%]">
        BotsApp
      </div>
      </ChatCtxProvider>
       
    </UserContext>
   
   
   
  );
}