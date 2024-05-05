import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const productCollectionRef = collection(db, "Product");
    const data = await getDocs(productCollectionRef);
    return data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

const initialState = {
    items: [],
    status: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

export default productsSlice.reducer