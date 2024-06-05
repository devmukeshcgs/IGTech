import { ADD_LOGIN, SET_LOGIN, SAVE_LOGIN } from "./actions"

const initialState = {
    login: []
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOGIN: {
            return { ...state, login: [...state.login, action.payload] }
        }
        case SET_LOGIN: {
            return { ...state, login: action.payload }
        }
        case SAVE_LOGIN: {
            return { ...state, login: action.payload }
        }
        default:
            return state
    }
}