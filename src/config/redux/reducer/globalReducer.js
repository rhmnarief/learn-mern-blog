const intialState = {
    name : 'Arief'
}

const globalReducer = (state = intialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return{
            ...state,
            name: 'Rahman'
        }
    }
    return state
}

export default globalReducer;