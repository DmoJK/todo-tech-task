import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { productsAPI } from "../services/ProductService"
import alertReducer from './reducers/alert'

const rootReducer = combineReducers({
    alertReducer,
    [productsAPI.reducerPath]: productsAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']