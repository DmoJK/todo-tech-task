import { productsAPI } from '../../../services/ProductService'
import MainProductItem from './MainProductItem'
import { IPrice, IProduct } from '../../../models/IProduct'
import { useLocation, useNavigate } from 'react-router-dom'
import { AddToCart } from '../../common/AddToCart'
import { useAppDispatch } from '../../../hooks/hooks'
import { alertSlice } from '../../../store/reducers/alert'
import { FC } from 'react'
import style from './MainProduct.module.css'

const MainProductContainer: FC = () => {
  let { pathname } = useLocation()
  if (pathname === '/') {
    pathname = '/best'
  }
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { addText } = alertSlice.actions
  const { data: data, isLoading, error } = productsAPI.useFetchAllProductsQuery(pathname)
  const { data: orders } = productsAPI.useFetchCartItemsQuery(null)
  const [addToCart, { error: notAdded }] = productsAPI.useAddToCartMutation()

  const handleNavigate = (endpoint: string, pet: string) => {
    navigate('/' + pet + '/' + endpoint)
  }

  const handleAlert = (text: string) => {
    dispatch(addText({ text: text, isShow: true }))
  }

  const handleAdd = (product: IProduct, price: IPrice) => {
    orders
      ? AddToCart(product, price, orders, addToCart, notAdded, handleAlert)
      : alert('error')
  }

  return (
    <div className={style.product__list}>
      {isLoading && <h1>Loading ...</h1>}
      {error && <h1>error</h1>}
      {data?.map(product =>
        <MainProductItem key={product.id} product={product} add={handleAdd} handleNavigate={handleNavigate} />
      )}
    </div>
  )
}

export default MainProductContainer