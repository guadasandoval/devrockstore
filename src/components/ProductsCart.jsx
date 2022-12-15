import React from 'react'
import borrar from "../assets/static/borrar.png"
import '../assets/css/ItemCart.css'

export default function ProductsCart(props) {
    const {nombre, precio, img, id} = props[0]
    const handleDelete = ()=>{
      props.deleteCart(id)
    }
  return (
    <div>
        <div className="carrito-item">
            <img src={img} alt="" className='carrito-item-img'/>
            <div className="carrito-txt">
                <h1 className='carrito-item-titulo'>{nombre}</h1>
                <h3 className='carrito-item-precio'>AR${precio}</h3>
            </div>
            <img src={borrar} alt="" className='carrito-item-borrar' onClick={handleDelete}/>
        </div>
    </div>
  )
}
