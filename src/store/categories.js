import superagent from 'superagent'
import dotenv from 'dotenv';
dotenv.config();
const API = process.env.API || 'https://api-js401.herokuapp.com/api/v1';


//========================================| Initial State |========================================
let initialState = {
  categories: [
    { name: 'food', displyName: 'Food', description: 'Provide nutritional support for an organism', url: 'https://images.pexels.com/photos/33162/food-restaurant-menu-asia.jpg?cs=srgb&dl=pexels-pixabay-33162.jpg&fm=jpg' },
    { name: 'electronics', displyName: 'Electronics', description: 'Physics, engineering, technology and applications ', url: 'https://images.pexels.com/photos/270640/pexels-photo-270640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { name: 'clothing', displyName: 'Clothing', description: 'Items worn on the body', url: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' }
  ],
  active: ''
};

//===========================================| Reducer |===========================================
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  // console.log('STATE??', state, 'Action', action);
  const { type, payload } = action;
  switch (type) {
    case 'GET_C':
      return payload;
    case 'ACTIVE':
      // Change the active category from payload value
      const active = payload;
      const categories = state.categories
      return { categories, active };
    default:
      return state;
  }
};

//============================================| Actions |============================================
export const activeCategory = (category) => {
  return {
    type: 'ACTIVE',
    payload: category,
  };
};

export const getRemoteData = () => {
  return (dispatch) => {
    return superagent.get(`${API}/categories`).then((response) => {
      dispatch(getCategories({ categories: response.body.results, active: '' }));
    });
  };
};

const getCategories = (payload) => {
  return {
    type: 'GET_C',
    payload: payload,
  };
};
//====================================================================================================