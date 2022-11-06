import { FC, useEffect, useState } from 'react'
import '../../App.css'
import { BiErrorCircle } from 'react-icons/bi'
import style from './alert.module.css'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { alertSlice } from '../../store/reducers/alert'

const AlertNotification: FC = (props) => {
  const { alertText, isNewText } = useAppSelector(state => state.alertReducer)
  const dispatch = useAppDispatch()
  const { addText } = alertSlice.actions

  const [showAlert, setShowAlert] = useState(false)
  const [show, setShow] = useState(false)
  let messageStyle = style.error
  if(alertText === 'Товар уже есть в корзине' || alertText === 'Вы не выбрали товар') {
    messageStyle = style.alert
  } else if(alertText === 'Товар добавлен в корзину' ) {
    messageStyle = style.added
  }
  useEffect(() => {
    if (alertText !== '') {
      setShow(true)
      setShowAlert(true)
      const timer = setTimeout(() => {
        setShow(false)
        dispatch(addText({text: alertText, isShow: false}))
        clearInterval(timer)
      }, 2000)
    }
  }, [isNewText === true])

  return (
    <div className={`${messageStyle} ${show ? style.show : style.hide} ${showAlert ? style.showAlert : ''}`}>
      <span className={style.warning_icon}>
        <BiErrorCircle />
      </span>
      <span className={style.message}>{alertText}</span>
    </div>
  )
}


export default AlertNotification