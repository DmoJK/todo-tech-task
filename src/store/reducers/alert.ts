import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IAction } from "../../models/IActions"

interface alertState {
    alertText: string
    isNewText: boolean
}

const initialState: alertState = {
    alertText: '',
    isNewText: false
}

export const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        addText(state, action: PayloadAction<IAction>) {
            state.alertText = action.payload.text
            state.isNewText = action.payload.isShow
        }
    }
})

export default alertSlice.reducer