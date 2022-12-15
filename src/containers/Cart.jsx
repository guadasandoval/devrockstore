import { useState, useEffect } from 'react';
import {useContext} from 'react'
import "../assets/css/Cart.css"
import ProductsCart from '../components/ProductsCart';
import Contexto from '../context/Contexto'

export default function Cart() {
  const { carrito, deleteCart } = useContext(Contexto)
  const [total, setTotal] = useState(0)

  const calcularPrecio = () => {
    let calculo = 0
    carrito.map(item => calculo += item[0].precio)
    setTotal(calculo)
  }

  useEffect(() => {
    calcularPrecio()
  }, [carrito]);

  return (
    <>
        <div className="carrito">
          <div className="carrito-listadito">
          {
          carrito.map((item, i) =>
            <ProductsCart {...item} key={i} deleteCart={deleteCart}></ProductsCart>
          )
        }
          </div>
          <div className="carrito-precio">
            Total a pagar <br /><strong>U$D {total}</strong>
          </div>
        </div>
    </>
  )
}
