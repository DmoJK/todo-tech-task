import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/hooks'
import { IPrice, IProduct } from '../../models/IProduct'
import { productsAPI } from '../../services/ProductService'
import { alertSlice } from '../../store/reducers/alert'
import { AddToCart } from '../common/AddToCart'
import ProductPage from './ProductPage'

const ProductPageContainer: FC = () => {
  const { data: data, isLoading, error } = productsAPI.useFetchAllProductsQuery('/best/1') // отображаем только один товар, потому что данные для катрочки есть только у него
  const { data: orders } = productsAPI.useFetchCartItemsQuery(null)
  const [addToCart, { error: notAdded}] = productsAPI.useAddToCartMutation()
  
  const dispatch = useAppDispatch()
  const {addText} = alertSlice.actions

  const handleAlert = (text:string) => {
    dispatch( addText({text: text, isShow: true}) )
  }
  const handleAdd = (product: IProduct, price: IPrice) => {
    orders
      ? AddToCart(product, price, orders, addToCart, notAdded, handleAlert)
      : alert('error')
  }

  return (
    <div>
      {isLoading && <h1>Loading ...</h1>}
      {error && <h1>error</h1>}
      {data?.map(product => <ProductPage key={product.id} product={product} add={handleAdd} handleAlert={handleAlert}/>)}
    </div>
  )
}

export default ProductPageContainer