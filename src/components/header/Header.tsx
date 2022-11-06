import React, { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../App.css'
import { ICart } from '../../models/IProduct'
import ShopCart from './ShopCart'

interface HeaderProps {
    cartItems: ICart[] | null
    remove: (product: ICart) => void
}

const Header: FC<HeaderProps> = ({ cartItems, remove }) => {
    const [isActive, setIsActive] = useState(false)
    const handleChange = (event: React.MouseEvent) => {
        event.stopPropagation()
        setIsActive(!isActive)
    }
    const navigate = useNavigate()
    let totalPrice = 0

    return (
        <header>
            <div className='header'>
                <span className='logo' onClick={() => navigate('/')}>Pets shop</span>
                <ul className='navigation'>
                    <li onClick={() => navigate('/about')}>О нас</li>
                    <li onClick={() => navigate('/cabinet')}>Кабинет</li>
                    <li className={`shop-cart-button${isActive ? ' active' : ''}`} onClick={handleChange}>Корзина</li>
                    {isActive && <div className='shop-cart'>
                        {cartItems && cartItems.length > 0 ?
                            <>
                                {cartItems.slice(0, 5).map(cartItem => <ShopCart key={cartItem.id} cartItem={cartItem} remove={remove} />)}
                                <p className='total-length'>Всего: {cartItems.length}</p>
                                {cartItems.forEach(el => totalPrice += Number.parseFloat(el.price.price))}
                                <p className='total-price'>Сумма: {new Intl.NumberFormat().format(totalPrice)}</p>
                            </> :
                            <div className='empty'><h2>Корзина пуста</h2></div>}
                    </div>}
                </ul>
            </div>
        </header>
    )
}

export default Header