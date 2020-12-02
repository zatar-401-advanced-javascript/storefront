import superagent from 'superagent'
import dotenv from 'dotenv';
dotenv.config();
const API = process.env.API || 'https://api-js401.herokuapp.com/api/v1';

//========================================| Initial State |========================================
let initialState = {
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5, image: 'https://cdn.pixabay.com/photo/2018/12/22/03/27/smart-tv-3889141_960_720.png' },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15, image: 'https://pluspng.com/img-png/radio-hd-png-radio-picture-png-image-500.png' },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25, image: 'https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8117.png' },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10, image: 'https://www.pngfind.com/pngs/m/14-143267_socks-png-background-image-sock-transparent-png.png' },
    { name: 'Apples', category: 'food', price: .99, inStock: 500, image: 'https://e1.pngegg.com/pngimages/23/306/png-clipart-new-s-two-red-apples-thumbnail.png' },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12, image: 'https://w7.pngwing.com/pngs/439/922/png-transparent-chicken-egg-yolk-egg-eggshell-broken-egg-easter-eggs.png' },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90, image: 'https://toppng.com/uploads/preview/bread-png-image-loaf-of-bread-11563103187ssm8yazedr.png' },
  ]
};
//===========================================| Reducer |===========================================
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case 'ACTIVE':
      // Filter inital state based on the active category
      let products = initialState.products.filter((product) => {
        return product.category === payload && product.inStock > 0;
      })
      return { products }

    case 'ADD':
      // Copy state, reduce in stock of the product, if the product reach to 0 filter the products and return without finshed product
      let newProducts = { ...state }
      let index = payload.index;
      let inStock = newProducts.products[index].inStock;
      let test = [...newProducts.products]
      test[index].inStock = inStock - 1;
      newProducts.products = test;
      // newProducts.products[index].inStock = inStock - 1

      if (inStock === 1) {
        newProducts.products = newProducts.products.filter((product) => {
          return product.inStock > 0;
        })
        return newProducts
      } else {
        return newProducts
      }
    // return state

    case 'DELETE':
      // reset the stock of the product and the count, if it was remove from products then add it again to the page
      let stock = payload.product.inStock
      payload.product.inStock = payload.product.inStock + payload.product.count;
      payload.product.count = 0;
      if (payload.active === payload.product.category && stock === 0) {
        return { products: [...state.products, payload.product] };
      }
      return { products: [...state.products] };
    case 'GET_P':
      initialState = payload;
      return payload;
    //===============================| Extra ===============================
    // case 'CLEAR':
    // initialState.products.forEach(product =>{
    //   product.inStock = product.inStock + product.count;
    //   product.count = 0;
    // })
    // let reset = initialState.products.filter((product) => {
    //   return product.category === payload && product.inStock > 0;
    // })
    // console.log(reset,initialState.products)
    // return {products:initialState.products}
    // return state
    //======================================================================
    default:
      return state;
  }
};
//=======================================================================================================

export const getRemoteData = () => {
  return (dispatch) => {
    return superagent.get(`${API}/products`).then((response) => {
      dispatch(getProducts({ products: response.body.results }));
    });
  };
};

export const updateRemoteData = (product) => {
  return (dispatch) => {
    return superagent.put(`${API}/products/${product._id}`).send({ inStock: product.inStock - 1 }).then(() => {
      dispatch(addProduct(product));
    });
  };
};

const getProducts = (payload) => {
  return {
    type: 'GET_P',
    payload: payload,
  };
};

export const addProduct = (product) => {
  return {
    type: 'ADD',
    payload: product,
  };
};

export const resetRemoteData = (payload) => {
  return (dispatch) => {
    return superagent.put(`${API}/products/${payload.product._id}`).send({ inStock: payload.product.inStock + payload.product.count }).then(() => {
      dispatch(resetProduct(payload));
    });
  };
};
export const resetProduct = (payload) => {
  return {
    type: 'DELETE',
    payload: payload,
  };
};