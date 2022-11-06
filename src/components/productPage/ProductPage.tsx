import { FC, useState } from 'react'
import { IPrice, IProduct } from '../../models/IProduct'
import style from './ProductPage.module.css'

interface ProductPage {
    product: IProduct
    add: (product: IProduct, price: IPrice) => void
    handleAlert: ((text: string) => void)
}


const ProductPage: FC<ProductPage> = ({ product, add, handleAlert }) => {
    const [show, setShow] = useState({ description: true, composition: false })
    const [isActive, setIsActive] = useState<number>(0)
    const handleChange = (id: number) => (event: React.MouseEvent) => {
        event.stopPropagation()
        isActive === id ? setIsActive(0) : setIsActive(id)
    }
    const handleAdd = (id: number) => (event: React.MouseEvent) => {
        id === 0 ?
        handleAlert('Вы не выбрали товар') :
        add(product, product.price[id - 1])
        setIsActive(0)
    }
    return (
        <div className={style.product__page}>
            <img src={product.img} />
            <div className={style.main}>
                <h3>{product.fullName}</h3>
                <div className={style.description}>
                    <ul>
                        <li onClick={() => setShow({ description: true, composition: false })} className={show.description ? style.active :''}>Описание</li>
                        <li onClick={() => setShow({ description: false, composition: true })} className={show.composition ? style.active :''}>Состав</li>
                    </ul>
                    {show.composition ? <div className={style.content}>{product.composition}</div> : <div className={style.content}>{product.fullDescription}</div>}
                </div>
            </div>
            <ul className={style.price}>
                {product.price.map(price =>
                    <li key={price.id} onClick={handleChange(price.id)} className={isActive === price.id ? style.selected : ''}>
                        {price.weight === '' ? '' : `${price.weight} - `}{price.price}
                    </li>
                )}
                <li onClick={handleAdd(isActive)}>
                    В корзину
                </li>
            </ul>

        </div>
    )
}

export default ProductPage