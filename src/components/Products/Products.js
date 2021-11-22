import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import image from "../../assets/image-product.jpg"
import { CardCatalogo } from '../CardCatalogo/CardCatalogo'
import { RenderProducts, Wrapper } from './styled'


export const Products = ({ OrderedProducts }) => {

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (
                        <CardCatalogo image={image} product={item} />
                    ))}
            </>
        )
    }

    function PaginatedItems({ itemsPerPage = 6  }) {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(OrderedProducts.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(OrderedProducts.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % OrderedProducts.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };

        return (
            <Wrapper>
                <RenderProducts>
                    <Items currentItems={currentItems} />
                </RenderProducts>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </Wrapper>
        );
    }

    return (
        <PaginatedItems />
    )

}
