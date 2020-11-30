// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {cart:[],show:false}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      const products = state.cart.map(product => product.name);
      if (!products.includes(payload.name)) {
        payload.count = 1
        return {cart:[...state.cart,payload],show:true}
      }

      const newState = state.cart.map((product)=>{
        if(product.name === payload.name){
          product.count++
        }
        return product
      })

      return {cart:newState,show:true}
    case 'CLEAR':
      // return {cart:[],show:true}
      return state
    case 'DELETE':
      const newProducts = state.cart.filter(product => product.name !== payload.product.name)
      return {cart:newProducts,show:true};
    case 'SHOW':
      return {cart:state.cart,show:payload};
    default:
      return state;
  }
};

export const addProduct = (product) => {
  return {
    type: 'ADD',
    payload: product,
  };
};

export const remoteProduct = (product) => {
  return {
    type: 'DELETE',
    payload: product,
  };
};

export const showCart = (open) => {
  return {
    type: 'SHOW',
    payload: open,
  };
};
