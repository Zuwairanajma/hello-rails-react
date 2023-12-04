// app/javascript/packs/reducers/greetingReducer.js

const initialState = {
    randomGreeting: '',
  };
  
  const greetingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RANDOM_GREETING_SUCCESS':
        return { ...state, randomGreeting: action.payload };
      case 'FETCH_RANDOM_GREETING_FAILURE':
        return state;
      default:
        return state;
    }
  };
  
  export default greetingReducer;
  