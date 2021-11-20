import React, { useEffect, useState } from 'react'

export const useSortAndFind = (products) => {
    const [OrderProducts, setOrderProducts] = useState(products)
    const [sort, setSort] = useState("default")
    const [find, setFind] = useState("")

    useEffect(() => {
        if (sort === "default") {
            setOrderProducts((prev) =>
                [...prev].sort((a, b) => a.id - b.id)
            );
        } else if (sort === "asc") {
            setOrderProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setOrderProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort,products]);

    let arreglo
    useEffect(() => {
        if (find !== "")
            setOrderProducts((prev) =>
                [...prev].filter((prev) =>
                    console.log(prev)
                )
            );
    }, [find,products])


    return (
        {
            setFind, setSort, OrderProducts

        }
    )
}
