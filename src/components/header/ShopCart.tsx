import React, { FC } from 'react'
import { ICart } from '../../models/IProduct'
import { FaTrash } from 'react-icons/fa'

interface ShopCartProps {
    cartItem: ICart
    remove: (product: ICart) => void
}

const ShopCart: FC<ShopCartProps> = ({ cartItem, remove }) => {
    const handleDelete = (event: React.MouseEvent,) => {
        event.stopPropagation()
        remove(cartItem)
    }
    return (
        <div className='cart-item'>
            <img src={cartItem.img} />
            <div>
                <h4>{cartItem.name}</h4>
                <div>{cartItem.status}</div>
                <div>{cartItem.price.weight} - {cartItem.price.price}</div>
            </div>
            <FaTrash className='delete' onClick={handleDelete} />
        </div>
    )
}

export default ShopCart