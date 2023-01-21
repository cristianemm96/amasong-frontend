export const SET_ON_USER = "SET_ON_USER"
export const SET_OFF_USER = "SET_OFF_USER"

export const setOffUser = (user)=>({
    type:SET_OFF_USER,
    payload:user
})

export const setOnUser = (user)=>({
    type: SET_ON_USER,
    payload:user   
})