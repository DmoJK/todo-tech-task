import React, { FC } from 'react'
import { IPrice, IProduct } from '../../../models/IProduct'
import style from './MainProduct.module.css'

interface MainProductItemProps {
    handleNavigate: (endpoint: string, pet: string) => void
    product: IProduct
    add: (product: IProduct, price: IPrice) => void
}

const MainProductItem: FC<MainProductItemProps> = ({ product, add, handleNavigate }) => {
    const handleAdd = (price: IPrice) => (event: React.MouseEvent) => {
        add(product, price)
    }
    const handleRedirect = (endpoint: string, pet: string) => (event: React.MouseEvent) => {
        handleNavigate(endpoint, pet)
    }

    return (
        <div className={style.product}>
            <img src={product.img} onClick={handleRedirect(product.category + '/' + product.id, product.pet)} />
            <h3>{product.name}</h3>
            <div>{product.description}</div>
            <div className={style.price}>
                {product.price.map(price =>
                    <div key={price.id} onClick={handleAdd(price)}>
                        {price.weight === '' ? '' : `${price.weight} - `}{price.price}
                    </div>)}
            </div>

        </div>
    )
}

export default MainProductItem