import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


type TAuth = {
    user: null | object,
    token: null | object
}
const initialState : TAuth = {
     user: null,
    token: null
}

export const authReducer = createSlice({
    name: "auth",
    initialState,
     reducers: {
        setUser : (state, action)=>{
            const {user, token} = action.payload;
            state.user = user;
            state.token = token
        },
        logout: (state)=>{
            state.user = null,
            state.token = null
        }
     }
})

export const {setUser, logout} = authReducer.actions;

export default authReducer.reducer;

export const useCurrentUser = (state: RootState) => state.auth.token;
export const useCurrentToken = (state: RootState) => state.auth.user;