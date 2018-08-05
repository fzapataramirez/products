import { combineReducers } from 'redux'
import products from './products'
import categoryFilter from './categoryFilter'

export default combineReducers({
    products,
    categoryFilter
})




// const initialState = {
//   products: data,
//   selectedCategory: 'All',
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ARTICLE:
//         return { ...state, articles: [...state.articles, action.payload] };
//     default:
//       return state;
//   }
// };
// export default rootReducer;