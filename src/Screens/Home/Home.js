import React from 'react'
import { useDispatch } from 'react-redux'
import { loadProducts } from '../../redux/productsSlice'
import { Catalogo } from '../Catalogo/Catalogo'
import products from "../../products.json"
import profile from "../../profile.json"
import { loadUser } from '../../redux/userSlice'


export const Home = () => {

    const dispatch = useDispatch()
    dispatch(loadProducts(products.productos))
    dispatch(loadUser(profile.profile))

    return (
        <>
            <Catalogo />
        </>
    )
}
