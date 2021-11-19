import React from 'react'
import { useDispatch } from 'react-redux'
import { NavBar } from '../../components/NavBar/NavBar'
import { LoadProducts } from '../../redux/productsSlice'
import { Catalogo } from '../Catalogo/Catalogo'
import products from "../../products.json"

export const Home = () => {
    
    
    
    const dispatch = useDispatch()
    dispatch(LoadProducts(products.productos))

    return (
        <>
            <NavBar />
            <Catalogo />
        </>
    )
}
