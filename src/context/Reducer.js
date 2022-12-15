//TYPES

const GET_PRODUCTS = "GET_PRODUCTS"
const SET_CART = "SET_CART"
const DELETE_CART = "DELETE_CART"

export default function Reducer(state, action){
    //payload es el dato
    //type es el tipo de operacion
    const {payload, type} = action
    switch(type){
        case GET_PRODUCTS:
            return{...state, products: payload}
            case SET_CART:
                return {
                  ...state,
                  carrito: [
                    ...state.carrito,
                    state.products.filter((item) => item.id === payload)
                  ],
                };
        case DELETE_CART:{
          return {
            ...state,
            carrito: state.carrito.filter((item) => item[0].id !== payload),
          };
        }
    }
}