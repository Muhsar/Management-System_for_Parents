import {
GetProducts,
AddItem,
DeleteItem,
Loading
} from '../actions/types'

const initialState = {
    products:[],
    loading:false,
    msg:'',
    error:''
}

export default function(state= initialState, action) {
    switch (action.type) {
      case GetProducts:
        return {
          ...state,
          products: action.payload,
          loading: false
        };

      case DeleteItem:
        return {
          ...state,
          products: state.products.filter(products => products._id !== action.payload)
        };
      case AddItem:
        return {
          ...state,
          products: [action.payload, ...state.products],
          msg: action.msg,
          error:action.error
        };

      case Loading:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
