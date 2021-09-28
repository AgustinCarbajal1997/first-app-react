export const formReducer = (state, action) => {
    switch (action.type){
        case "MODIFY_INPUT":
            const newmodification = {
                value: action.payload.value,
                onBlur:action.payload.onBlur,
                checked:action.payload.checked
            } 
            return{
                ...state,
                [action.payload.item]: newmodification
            }
        case "BLUR_REGEX":
            const blurModification = {
                ...state[action.payload],
                onBlur:true
            }
            return {
                ...state,
                [action.payload]: blurModification
            }
        default:
            return state;
    }
}

