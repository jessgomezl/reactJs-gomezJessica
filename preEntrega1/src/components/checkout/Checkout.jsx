import React,  { useContext, useState } from 'react'
import {
    FormLabel,
    FormControl,
    Input,
    Button,
    Heading,
    Box,
  } from '@chakra-ui/react'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [ user, setUser ] = useState({
        name:'',
        surname:'',
        phone: isNaN ,
        email:''
    })

    const [ error, setError] = useState({})
    const { cart, getTotal, clearCart } = useContext(Context)

    const updateUser = (event) => {
        setUser((user) => ({
            ...user,
            [event.target.name]: event.target.value
        }))
    }

    const navigate = useNavigate()

    const validateForm = () => {
        const errors = {}
        if(user.name === ' ' || !isNaN){
            errors.name= "El nombre no puede contener numeros ni espacios"
        }
        if (user.surname === ' ' || !isNaN) {
            errors.surname = "El apellido no puede contener numeros ni espacios"
        }
        if (user.phone.length !== 10 || isNaN) {
            errors.phone = "El teléfono debe contener 10 numeros"
        }
        if (user.email.indexOf('@') === -1) {
            errors.email = "El email debe contener @"
        }

        setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        const isForValid = validateForm ()

        if(isForValid){

            const ordersCollection = collection(db, 'orders')   

            try {
                for(const item of cart) {
                    const productRef = doc(db, 'productos', item.id)
                    const productDoc = await getDoc(productRef)

                    const currentStock = productDoc.data().stock

                    if(currentStock >= item.quantity) {
                        await updateDoc(productRef, {
                            stock: currentStock - item.quantity
                        })
                    }else {
                        // mostrarle al usuario el error que no tiene suficiente stock
                        console.log(`No hay suficiente stock para ${item.name}`)
                    }
                    const order = {
                        buyer: user,
                        cart: cart,
                        total: getTotal(),
                        fechaDeCompra: Timestamp.now() 
                    }
                    
                    const orderDocRef = await addDoc(ordersCollection, order)
                    Swal.fire({
                        title: 'Gracias por tu compra',
                        text: `El número de orden es: ${orderDocRef.id}`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then(()=> {
                        clearCart()
                        navigate('/')
                    })
                    }
            } catch (error) {
                console.log(error)
            }
        }
    }

return (
    <Box>
        <Heading >DATOS DEL PAGO</Heading>
        <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input type='tex' placeholder='Ingrese su nombre'onChange={updateUser}/>
            <FormLabel>Apellido</FormLabel>
            <Input type='text' placeholder='Ingrese su apellido'onChange={updateUser}/>
            <FormLabel>Telefono</FormLabel>
            <Input type='text' placeholder='Ingrese su teléfono'onChange={updateUser}/>
            <FormLabel>Email</FormLabel>
            <Input type='email' placeholder='Ingrese su email'onChange={updateUser}/> 
        <Button onClick={getOrder}>Finalizar compra</Button>
        </FormControl>
    </Box>
)
}

export default Checkout