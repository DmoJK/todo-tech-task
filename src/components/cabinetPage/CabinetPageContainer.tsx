import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICart } from '../../models/IProduct'
import { productsAPI } from '../../services/ProductService'
import CabinetPage from './CabinetPage'

const CabinetPageContainer: FC = () => {
  const { data: orders } = productsAPI.useFetchCartItemsQuery(null)
  const [deleteFromCart, { }] = productsAPI.useDeleteFromCartMutation()
  const navigate = useNavigate()

  const handleRemove = (product: ICart) => {
    deleteFromCart(product)
  }

  const handleNavigate = (endpoint: string, pet: string) => {
    navigate('/' + pet + '/' + endpoint)
  }

  return (
    <CabinetPage cartItems={orders ? orders : null} remove={handleRemove} handleNavigate={handleNavigate} />
  )
}

export default CabinetPageContainer