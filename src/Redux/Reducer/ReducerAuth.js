const initialState = {
  isLogin: false,
  isRegister: {},
  isLoading: false,
}

const ReducerAuth = (state = initialState, {type,payload}) => {
  switch (type) {
    case 'IS_LOGIN': {
      return {
        ...state,
        isLogin: true,
        isLoading: true
      }
    } case 'IS_REGISTER': {
      return{
        ...state,
        isRegister: payload,
        isLoading: true
      }
    }
    default:
      return {...state}
  }
}

export default ReducerAuth
