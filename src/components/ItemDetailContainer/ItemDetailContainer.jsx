import { useEffect, useState } from 'react'
import { getProductById } from '../ItemListContainer/data/data.js'
import ItemDetail from './ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

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
            {loading ? <div className="loader"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg></div> : <ItemDetail {...product}/>}
        </div>
    )
}

export default ItemDetailContainer