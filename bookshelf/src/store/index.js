/*import {createStore} from 'redux'

const defaultState = {
    login: false
}

function loginReduser(state = defaultState, action){
    switch(action.type){
        case 'LOGIN':
            return {login: true}
        
        case 'LOGOUT':
            return {login: false}

        default:
            return state

    }
}

export let store = createStore(loginReduser)

export const logIn = () =>{
    return {type: 'LOGIN'}
} 
export let logOut = {type: 'LOGOUT'}

store.subscribe(() => {console.log(store.getState().login)})
*/

import {createSlice} from '@reduxjs/toolkit'
export const loginSlice = createSlice({
    name: "login",
    initialState:{
        login: false
    },
    reducers:{
        logIn: (state) => {
            state.login = true
        },
        logOut: (state) => {
            state.login = false
        },
    }
})


export const {logIn, logOut} = loginSlice.actions


export default  loginSlice.reducer