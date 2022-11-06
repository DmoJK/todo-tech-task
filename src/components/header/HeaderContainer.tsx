import { productsAPI } from '../../services/ProductService'
import '../../App.css'
import Header from './Header'
import { ICart } from '../../models/IProduct'
import { FC } from 'react'

const HeaderContainer: FC = () => {
    const { data: orders } = productsAPI.useFetchCartItemsQuery(null)
    const [deleteFromCart, { }] = productsAPI.useDeleteFromCartMutation()

    const handleRemove = (product: ICart) => {
        deleteFromCart(product)
    }

    return (
        <div>
            <Header cartItems={orders ? orders : null} remove={handleRemove} />
        </div>
    )
}

export default HeaderContainer