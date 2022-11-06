import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { ICart, IProduct } from '../models/IProduct'

export const productsAPI = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['Product', 'CartItem'],
    endpoints: (build) => ({
        fetchAllProducts: build.query<IProduct[], string>({
            query: (path: string) => ({
                url: `${path}`
            }),
            providesTags: result => ['Product']
        }),
        fetchCartItems: build.query<ICart[], null>({
            query: () => ({
                url: '/orders'
            }),
            providesTags: result => ['CartItem']
        }),
        addToCart: build.mutation<ICart, ICart>({
            query: (product) => ({
                url: `/orders`,
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['CartItem']
        }),
        deleteFromCart: build.mutation<ICart, ICart>({
            query: (product) => ({
                url: `/orders/${product.id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['CartItem']
        })
    }),
})