const INITIAL_STATE = {
    filter: ''
}

export const filtersSlice = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload
            } 
        default:
            return state;  
    } 

}