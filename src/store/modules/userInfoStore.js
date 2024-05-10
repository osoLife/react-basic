import { createSlice } from '@reduxjs/toolkit'
import { setToken as _setToken, getToken } from '@/utils'

const userInfoStore = createSlice({
    name: 'userInfo',
    initialState: {
        token: getToken() || ''
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        }
    }
})

const { setToken } = userInfoStore.actions
const userInfoReducer = userInfoStore.reducer

export { setToken }
export default userInfoReducer