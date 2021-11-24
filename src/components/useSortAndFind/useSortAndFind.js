import { useEffect, useState } from 'react'

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
    }, [sort, products]);

    useEffect(() => {
        if (find !== "") {
            setOrderedProducts((prev) =>
                [...prev].filter((product)=>{
                    console.log(product)
                    return (product.title.toLowerCase().includes(find.toLowerCase()))
                })
            )
        } else {
            setOrderedProducts(products)
        }
    }, [find])


    return (
        {
            setFind, setSort, OrderedProducts

        }
    )
}
