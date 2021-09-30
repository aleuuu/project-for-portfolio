const initialState = {
    items: []
}

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CARD":
            return{
                ...state,
                items: action.payLoad
            }
        default:
            return state;
    }
}