import { useEffect, useState } from 'react'
import { getProductById } from '../ItemListContainer/data/data.js'
import ItemDetail from './ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
    const [product, setProduct] = useState()
    const { idProduct } = useParams()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        getProductById(idProduct)
            .then((response) => {
                setProduct(response)
            })
            .catch((err) => {
                console.error(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    
    return (
        <div className="ItemDetailContainer">
            {loading ? <div>Cargando...</div> : <ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailContainer