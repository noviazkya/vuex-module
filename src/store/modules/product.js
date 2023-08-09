import axios from "axios";

const product = {
  namespaced: true,
  state: {
    productData: [],
  },

  getters: {
    getProducts: (state) => state.productData,
    //   get single product
    getProductById: (state) => (productId) => {
      console.log("Fetching single product by ID:", productId);
      console.log("ProductData:", state.productData);
      const product = state.productData.find((p) => p.id == productId);
      console.log("Product:", product);
      return product;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await axios.get("https://fakestoreapi.com/products/");
        commit("SET_PRODUCTS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    // get single product
    async fetchSingleProduct({ commit }, productId) {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        commit("SET_SINGLE_PRODUCT", response.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.productData = products;
    },
    SET_SINGLE_PRODUCT(state, product) {
      state.singleProduct = product;
    },
  },
};

export default product;