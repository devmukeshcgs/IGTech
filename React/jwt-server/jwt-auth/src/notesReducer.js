import { ADD_NOTE, SET_NOTES, SAVE_NOTES, SAVE_NOTES_DONE } from "./actions"

const initialState = {
    isOTPSent: false,
    notes: {}
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            return { ...state, notes: [...state.notes, action.payload] }
        }
        case SET_NOTES: {
            return { ...state, notes: action.payload }
        }
        case SAVE_NOTES: {
            return { ...state, notes: action.payload }
        }
        case SAVE_NOTES_DONE: {
            return { ...state, notes: action.payload }
        }
        default:
            return state
    }
}