import React, { useContext, useState } from 'react'
import {
    FormLabel,
    FormControl,
    Input,
    Button,
    Heading,
    Box,
    Text,
} from '@chakra-ui/react'
import { Timestamp, addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Context from '../../context/CartContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        phone: '',
        email: ''
    })

    const [error, setError] = useState({})
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
        if (!user.name.trim()) {
            errors.name = "El nombre es requerido"
        }
        if (!/^[a-zA-Z]+$/.test(user.name)) {
            errors.name = "El nombre no puede contener números ni espacios"
        }
        if (!user.surname.trim()) {
            errors.surname = "El apellido es requerido"
        }
        if (!/^[a-zA-Z]+$/.test(user.surname)) {
            errors.surname = "El apellido no puede contener números ni espacios"
        }
        if (!/^\d{10}$/.test(user.phone)) {
            errors.phone = "El teléfono debe contener 10 números"
        }
        if (!user.email.includes('@')) {
            errors.email = "El email debe contener @"
        }

        setError(errors)
        return Object.keys(errors).length === 0
    }

    const getOrder = async () => {
        const isFormValid = validateForm()

        if (isFormValid) {
            const ordersCollection = collection(db, 'orders')

            try {
                for (const item of cart) {
                    const productRef = doc(db, 'productos', item.id)
                    const productDoc = await getDoc(productRef)

                    if (!productDoc.exists()) {
                        throw new Error(`Producto ${item.id} no encontrado`)
                    }

                    const currentStock = productDoc.data().stock

                    if (currentStock >= item.quantity) {
                        await updateDoc(productRef, {
                            stock: currentStock - item.quantity
                        })
                    } else {
                        Swal.fire({
                            title: 'Error',
                            text: `No hay suficiente stock para ${item.name}`,
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        })
                        return
                    }
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
                }).then(() => {
                    clearCart(() => {
                        navigate('/')
                    })
                })
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al procesar tu orden. Por favor intenta nuevamente.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            }
        }
    }

    return (
        <Box>
            <Heading>DATOS DEL PAGO</Heading>
            <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input
                    type='text'
                    placeholder='Ingrese su nombre'
                    name='name'
                    value={user.name}
                    onChange={updateUser}
                    autoComplete='name'
                />
                {error.name && <Text color='red.500'>{error.name}</Text>}
                <FormLabel>Apellido</FormLabel>
                <Input
                    type='text'
                    placeholder='Ingrese su apellido'
                    name='surname'
                    value={user.surname}
                    onChange={updateUser}
                    autoComplete='family-name'
                />
                {error.surname && <Text color='red.500'>{error.surname}</Text>}
                <FormLabel>Teléfono</FormLabel>
                <Input
                    type='text'
                    placeholder='Ingrese su teléfono'
                    name='phone'
                    value={user.phone}
                    onChange={updateUser}
                    autoComplete='tel'
                />
                {error.phone && <Text color='red.500'>{error.phone}</Text>}
                <FormLabel>Email</FormLabel>
                <Input
                    type='email'
                    placeholder='Ingrese su email'
                    name='email'
                    value={user.email}
                    onChange={updateUser}
                    autoComplete='email'
                />
                {error.email && <Text color='red.500'>{error.email}</Text>}
                <Button onClick={getOrder}>Finalizar compra</Button>
            </FormControl>
        </Box>
    )
}

export default Checkout