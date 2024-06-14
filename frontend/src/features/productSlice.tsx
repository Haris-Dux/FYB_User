import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// API URLs
const getAllProductUrl = `https://foryourbeauty.shop/api/products/getProducts`;
const getProductById = `https://foryourbeauty.shop/api/products/getProductById`;
const getLatestProductUrl =
  "https://foryourbeauty.shop/api/products/getLatestPRoducts";

// GET ALL PRODUCT ASYNC THUNK
export const getAllProductsAsync = createAsyncThunk(
  "Shop/getProduts",
  async (data: {
    category: string | undefined;
    page: number;
    search?: string;
  }) => {
    const searchQuery =
      data?.search !== undefined && data?.search !== null
        ? `&search=${data?.search}`
        : "";
    try {
      const response = await axios.post(
        `${getAllProductUrl}?category=${data.category}&page=${data.page}${searchQuery}`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

// GET ALL PRODUCT ASYNC THUNK
export const getLatestProductsAsync = createAsyncThunk(
  "products/latest ",
  async () => {
    try {
      const response = await axios.post(getLatestProductUrl);
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

// GET ALL PRODUCT ASYNC THUNK
export const getProductByIdAsync = createAsyncThunk(
  "products/singleProduct ",
  async (id: string | undefined) => {
    try {
      const response = await axios.post(getProductById, { id });
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

interface Image {
  downloadURL: string;
  name: string;
  type: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  image: Image;
  averageRating: number;
  description: string;
  sale_price: number | undefined;
  price: number;
  stock: number;
}

// INITIAL STATE
interface ProductState {
  loading: boolean;
  Productloading: boolean;
  products: Product[] | any;
  latestProducts: Product[];
  singleProduct: Product | null;
}

const initialState: ProductState = {
  loading: false,
  Productloading: false,
  products: [],
  latestProducts: [],
  singleProduct: null,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // GET ALL PRODUCTS ADD CASE
      .addCase(getAllProductsAsync.pending, (state) => {
        state.Productloading = true;
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        state.Productloading = false;
        state.products = action.payload;
      })

      // GET SINGLE PRODUCTS
      .addCase(getProductByIdAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })

      // GET ALL LATEST PRODUCTS ADD CASE
      .addCase(getLatestProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLatestProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.latestProducts = action.payload;
      });
  },
});

export default productSlice.reducer;
