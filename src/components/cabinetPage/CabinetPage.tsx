import { FC } from "react"
import { ICart } from "../../models/IProduct"
import style from "./CabinetPage.module.css"
import { FaTrash } from 'react-icons/fa'

interface CabinetPageProps {
  handleNavigate: (endpoint: string, pet: string) => void
  cartItems: ICart[] | null
  remove: (product: ICart) => void
}

const CabinetPage: FC<CabinetPageProps> = ({ cartItems, remove, handleNavigate }) => {
  const handleDelete = (cartItem: ICart) => (event: React.MouseEvent,) => {
    event.stopPropagation()
    remove(cartItem)
  }
  const handleRedirect = (endpoint: string, pet: string) => (event: React.MouseEvent) => {
    handleNavigate(endpoint, pet)
  }
  let totalPrice = 0

  return (
    <div className={style.cabinet}>
      <div className={style.mainText}>Товары в корзине</div>
      <div className={style.main}>
        <div>
          {cartItems && cartItems.length > 0 ?
            <>
              {cartItems.map(cartItem =>
                <div className={style.product} key={cartItem.id}>
                  <img src={cartItem.img} alt={'imgNotFound'} onClick={handleRedirect(cartItem.category + '/' + cartItem.id, cartItem.pet)} />
                  <div className={style.productInfo}>
                    <div className={style.productName}>{cartItem.name}</div>
                    <div>{cartItem.status}</div>
                    <div>{cartItem.price.weight} - {cartItem.price.price}</div>
                  </div>
                  <FaTrash className={style.delete} onClick={handleDelete(cartItem)} />
                </div>)}
              {cartItems?.forEach(el => totalPrice += Number.parseFloat(el.price.price))}
            </> :
            <></>}
        </div>
        <div className={style.order}>
          <div>Заказ</div>
          <p>
            <span>Всего</span>
            <span className={style.value}>{cartItems?.length}</span>
          </p>
          <p>
            <span>Сумма</span>
            <span className={style.value}>{new Intl.NumberFormat().format(totalPrice)}</span>
          </p>
          <p className={style.pay}>Перейти к оплате</p>
        </div>
      </div>
    </div>
  )
}

export default CabinetPage