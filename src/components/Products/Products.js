import React, { useEffect, useState } from 'react'
import image from "../../assets/image-product.jpg"
import { CardCatalogo } from '../CardCatalogo/CardCatalogo'
import { RenderProducts, Wrapper } from './styled'
import products from "../../products.json"


export const Products = ({ sort, find }) => {

    console.log(sort , find , products);

    const [OrderProducts, setOrderProducts] = useState(products.productos)
    const [FilterState, setFilterState] = useState([])


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
      }, [sort]);




    return (
        <Wrapper>
            {
                OrderProducts.map((product, idx) =>
                    <RenderProducts key={idx}>
                        <CardCatalogo image={image} product={product} />
                    </RenderProducts>
                )
            }
        </Wrapper>
    )
}
