import React, {useContext, useEffect} from 'react'
import "../assets/css/Home.css"
import Item from '../components/Item'
import Contexto from '../context/Contexto'

export default function Home() {
  const {getProducts, products} = useContext(Contexto)
  useEffect(()=>{
    getProducts()
  },[])
  
  return (
    <>
    <div className="container">
      <div className="wraper">
        <div className="home">
           {
            products.map((item)=>(
              <Item {...item} key={item.id}></Item>
            ))
           }
        </div>
      </div>
    </div>
    </>
  )
}
