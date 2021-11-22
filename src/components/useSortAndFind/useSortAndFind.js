import React, { useEffect, useState } from 'react'

export const useSortAndFind = (products) => {
    const [OrderedProducts, setOrderedProducts] = useState(products)
    const [sort, setSort] = useState("default")
    const [find, setFind] = useState("")

    useEffect(() => {
        setOrderedProducts(products)
    }, [products])

    useEffect(() => {
        if (sort === "default") {
            setOrderedProducts((prev) =>
                [...prev].sort((a, b) => a.id - b.id)
            );
        } else if (sort === "asc") {
            setOrderedProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setOrderedProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort,products]);

    let arreglo
    useEffect(() => {
        if (find !== "")
            setOrderedProducts((prev) =>
                [...prev].filter((prev) =>
                    console.log(prev)
                )
            );
    }, [find,products])


    return (
        {
            setFind, setSort, OrderedProducts

        }
    )
}
