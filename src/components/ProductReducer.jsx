
const initialState = {
    cartData: [],
  };
  
  export const productReducer = (state = initialState, action) => {
    console.log(action);
    
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cartData: [...state.cartData, action.payload],
        };
  
      case 'REMOVE_FROM_CART': {
        const filteredProducts = state.cartData.filter((cartItem) => cartItem.id !== action.payload);
        return {
          ...state,
          cartData: filteredProducts,
        };
      }
      
      default:
        return state;
    }
  };
  