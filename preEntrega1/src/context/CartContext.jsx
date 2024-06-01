import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2'

const Context = createContext()

export const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newProduct = { ...productToAdd, quantity }
        if (isInCart(newProduct.id)) {
            const updatedCart = cart.map((el) => {
                if (el.id === newProduct.id) {
                    return { ...el, quantity: el.quantity + newProduct.quantity }
                }
                return el
            })
            setCart(updatedCart)
        } else {
            setCart([...cart, newProduct])
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const removeItem = (id) => {
        const deleteItem = cart.find((prod) => prod.id === id)
        if (!deleteItem) return
        Swal.fire({
            title: `¿Estás seguro de eliminar ${deleteItem.nombre}?`,
            text: 'Esta acción eliminará el producto del carrito',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedCart = cart.filter((prod) => prod.id !== id)
                setCart(updatedCart)
                Swal.fire('¡Eliminado!', '', 'success')
            }
        })
    }

    const getTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
        return total
    }

    const clearCart = (callback) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción vaciará el carrito',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar carrito'
        }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
                Swal.fire('¡Carrito vacio!', '', 'success').then(() => {
                    if (callback) callback()
                })
            }
        })
    }

    const getQuantity = () => {
        let total = 0
        cart.forEach((prod) => {
            total = total + prod.quantity
        })
        return total
    }

    const currentQuantity = (productId) => {
        const product = cart.find((item) => item.id === productId)
        return product ? product.quantity : 0
    }

    return (
        <Context.Provider
            value={{
                cart,
                addItem,
                removeItem,
                getTotal,
                clearCart,
                getQuantity,
                currentQuantity
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context