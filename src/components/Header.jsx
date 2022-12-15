import React from 'react'
import iconoCart from "../assets/static/carrito.png"
import back from "../assets/static/volver.png"
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <>

        <Link to="/cart"><img src={iconoCart} alt="" className="carritou"/></Link>
          <a href="/"><img src={back} alt="" className="volver"/></a>

        <h1 className="titulo">
          Dev <br />
          RockStore
        </h1>
    </>
  )
}
