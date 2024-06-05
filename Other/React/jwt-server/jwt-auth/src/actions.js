export const ADD_NOTE = "ADD_NOTE";
export const SET_NOTES = "SET_NOTES";
export const LOAD_NOTES = "LOAD_NOTES";
export const SAVE_NOTES = "SAVE_NOTES";
export const SAVE_NOTES_DONE = "SAVE_NOTES_DONE";
export const VERIFY_OTP = "VERIFY_OTP";

// LOGIN
export const ADD_LOGIN = "ADD_LOGIN";
export const SET_LOGIN = "SET_LOGIN";
export const SAVE_LOGIN = "SAVE_LOGIN";

export const addNote = (note) => ({
    type: ADD_NOTE,
    payload: note,
});

export const setNotes = (notes) => ({
    type: SET_NOTES,
    payload: notes,
});

export const saveNotes = (allNotes) => ({
    type: SAVE_NOTES,
    payload: allNotes,
});
export const saveNotesDone = (res) => ({
    type: SAVE_NOTES_DONE,
    payload: res,
});

export const loadNotes = () => ({
    type: LOAD_NOTES,
});

export const verifyOTP = () => ({
    type: VERIFY_OTP,

})

//LOGIN EXPORTS
export const addLogin = (login) => ({
    type: ADD_LOGIN,
    payload: login,
});

export const setLogin = (login) => ({
    type: SET_LOGIN,
    payload: login,
});

export const saveLogin = (login) => ({
    type: SAVE_LOGIN,
    payload: login,
});