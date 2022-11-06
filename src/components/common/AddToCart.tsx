import { IProduct, IPrice, ICart } from "../../models/IProduct"

export const AddToCart = (product: IProduct, price: IPrice, orders: ICart[], addToCart: (cart: ICart) => void, notAdded: any, handleAlert: (text: string) => void) => {
    let isAdded = false
    orders.forEach(el => {
        if (el.idProduct === product.id && el.img === product.img) {
            isAdded = true
            handleAlert('Товар уже есть в корзине')
        }
    })
    if (!isAdded) {
        let cartId = 1
        let inArr: any[] = []

        orders.forEach(el => { inArr.push(el.id) })
        for (let i = 1; i <= 10; i++) {
            if (!inArr.includes(i)) {
                cartId = i
                break;
            }
        }
        let { id, img, name, category, pet } = product
        let cart = { id: cartId, idProduct: id, img, name, price: price, status: 'ожидает оплаты', category, pet }
        addToCart(cart) // выскакивает при ошибках с сервера
        if (notAdded !== undefined) { handleAlert(notAdded.status) }
        handleAlert('Товар добавлен в корзину')
    }
}