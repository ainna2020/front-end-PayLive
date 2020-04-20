const intialState = {
  data: {},
  isLoading: false,
  isRegistered: false
}
console.log(intialState.pending)
export default function Register (state = intialState, { type, payload }) {
  switch (type) {
    case 'IS_REGISTER':
      return {
        ...state,
        isLoading: true,
        isRegistered: true,
        data: payload
      }
    case 'FAILED':
      return {
        ...state,
        isLoading: false,
        data: payload
      }
    default:
      return { ...state }
  }
}
