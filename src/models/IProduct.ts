export interface IPrice {
    weight: string
    price: string
    id: number
}

export interface IProduct {
    name: string,
    description: string,
    img: string,
    price: IPrice[],
    id: number,
    category: string,
    pet: string,
    fullName?: string,
    fullDescription?: string,
    composition?: string
}

export interface ICart {
    name: string,
    img: string,
    price: IPrice,
    id: number,
    status: string,
    idProduct: number,
    category: string,
    pet: string
}