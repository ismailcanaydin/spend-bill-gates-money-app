import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchProducts = createAsyncThunk('products/getProducts', async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/products`)
    return res.data
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        totalMoney: 100000000000,
        lastMoney: 0,
        status: 'idle',
    },
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = 'succeeded'
        },
        [fetchProducts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },
    }
})

export default productsSlice.reducer