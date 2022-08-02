import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService} from "../../services";

const initialState = {
    errors: null,
    isAuth: null
};

const register = createAsyncThunk(
    'authSlice/register',
    async ({user}, {rejectWithValue}) => {
        try {
            await authService.register(user);//save user to API
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const login = createAsyncThunk(
    'authSlice/login',
    async ({user}, {rejectWithValue}) => {
        try {
            const {data} = await authService.login(user);//after success login returns you tokens(access,refresh)return data;
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }

    }
)


const authSlice = createSlice({
        name: 'authSlice',
        initialState,
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(login.fulfilled, (state, action) => {//when login process fulfilled,it returns token into action.payload,so, we can save them
                    state.isAuth = true;
                    authService.saveTokens(action.payload);
                })
                .addDefaultCase((state, action) => {
                    const [type] = action.type.split('/').splice(-1);//it is default for all action, for example authSlice/login/rejected, so, we slice it and take the last part
                    if (type === 'rejected') {
                        state.errors = action.payload
                    } else {
                        state.errors = null;
                    }
                })
        }
    }
)

const {reducer: authReducer, actions: {}} = authSlice;

const authActions = {
    login,
    register
};

export {
    authReducer,
    authActions
}
