import Contexto from "./Contexto";
import React from 'react'
import axios from "axios";
import { useReducer } from "react";
import Reducer from "./Reducer";

export default function UseContexto(props) {
const API = "https://devrockstore-default-rtdb.firebaseio.com/productos.json";
const {children} = props
const initState ={
    products: [],
    carrito:[],
  }
const [state, dispatch] = useReducer(Reducer, initState)

  const getProducts = async ()=>{
    const res = await axios.get(API)
   dispatch({type:"GET_PRODUCTS", payload: res.data})
  }

  const setCart = (id) => { 
      dispatch({ type: "SET_CART", payload: id });
  };

  const deleteCart = (id)=>{
    console.log("delete item", id);
    dispatch({ type: "DELETE_CART", payload: id });
  }
  
    return (
    <Contexto.Provider value={{products: state.products, carrito: state.carrito, getProducts, setCart, deleteCart}}>
      {children}
    </Contexto.Provider>
  )
}
