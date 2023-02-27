import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        token: '',
        data: {}
    },
    reducers: {
        login(state, actions) {
            return {
                ...state,
                isAuth: true,
                token: actions.payload
            }
        },
        logout(state, actions) {
            return {
                ...state,
                isAuth: false,
                token: '',
                data: {}
            }
        },
        setData(state, actions) {
            return {
                ...state,
                data: actions.payload
            }
        }
    }
})

export const { login, logout, setData } = userSlice.actions
export default userSlice.reducer
