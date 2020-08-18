import {
Loading,
ProductDetail} from '../actions/types'

const initialState = {
    product:'',
    loading:false
}

export default function(state= initialState, action) {
    switch (action.type) {

      case ProductDetail:
        return {
          ...state,
          product:action.payload,
          loading: false
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
