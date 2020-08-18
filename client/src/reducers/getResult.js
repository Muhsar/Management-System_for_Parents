import {GetResult,
  AddResult,
  Loading,

  DeleteResult
} from '../actions/types'

const initialState = {
  result:[],
  loading:false,
  msg:''
}

export default function(state= initialState, action) {
  switch (action.type) {
    case GetResult:
    return {
      ...state,
      result: action.payload,
      loading: false
    };
    


    case AddResult:
    return {
      ...state,
      result:(action.payload===(''))?([...state.result]):([...state.result,action.payload]),
      msg:action.msg===('')?'':action.msg
    };
    case DeleteResult:
      return {
        ...state,
        result: state.result.filter(result => result._id !== action.payload)
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
