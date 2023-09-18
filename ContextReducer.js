import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext=createContext();
const CartDispatch=createContext()


const reducer=(state,action)=>{

    switch(action.type){
        case "ADD":
            return [...state,{id:action.id,name:action.name}]

            default:
                console.log("Error in Reducer")
    }

}


export const CardProvider=({children})=>{

    const [state,dispatch]=useReducer(reducer,[])
    return (
        <CartDispatch.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
        </CartDispatch.Provider>
        
       
       

        
    )



}



export const Usecart=()=>useContext(CartStateContext)
export const  UseDispatchcart=()=>useContext(CartDispatch)