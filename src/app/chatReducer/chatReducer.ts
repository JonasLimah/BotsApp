import { MsgType } from "../../../types/msgType"

type Add ={
    type:"add",
    payload:{
        text:string,
        name:string
    }
}

type Del = {
    type:"del",
    payload:{
        id:number
    }
}
type Edit ={
    type:"edit",
    payload:{
        id:number,
        newText:string
    }
}

export type TypeActions = Add | Del | Edit;

export const ChatReducer =(state:Array<MsgType>,action:TypeActions)=>{
    switch(action.type){
        case 'add':
            return [...state,{id:state.length,text:action.payload.text,name:action.payload.name}]
        case 'del':
            return state.filter(i=>i.id !== action.payload.id)
        case 'edit':   
            return state.map(i=>{
                if(i.id === action.payload.id){
                 i.text = action.payload.newText
            }return i;})
         default:    
            return state;
    }
}