import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { products } from "../products"

export const fetchProducts = createAsyncThunk('products/getProducts', async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/products`)
    return res.data
})

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: products,
        money: 100000000000,
        currentMoney: 0,
        status: 'idle',
    },
    reducers: {
        addToChart: (state, action) => {
            const { quantity, productItem } = action.payload

            const product = state.items.find((item) => item.product_id === productItem.product_id)
            product.amount = quantity

            let price = 0

            state.items.map((item) => item.amount > 0 ? (price += item.amount * item.product_price) : "" )
            state.currentMoney = Number(state.money) - price;

        }
    },
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

export const { addToChart } = productsSlice.actions
export default productsSlice.reducer