import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counter'

const store = configureStore({
    reducer:{ counter:counterSlice.reducer}
})

export default store
export const counter = counterSlice.actions