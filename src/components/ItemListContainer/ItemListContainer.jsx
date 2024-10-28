import React from 'react'
import { getProducts } from './data/data'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

function ItemListContainer() {
    const [products, setProducts] = useState([])

    const {idCategory} = useParams()
    console.log(idCategory)

    useEffect(() => {
        getProducts()
        .then((dataProducts)=>{
            if(idCategory){
                const productsFilter = dataProducts.filter( (product) => product.category === idCategory)
                setProducts(productsFilter)
            }else {
                setProducts(dataProducts)
            }
        })
        .catch((err)=>{
            console.error(err)
        })
    }, [idCategory])

    return (
        <div style={{textAlign: 'center'}}>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer