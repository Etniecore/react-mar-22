import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    errors: null,
    cars: [],
    updateCar: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWithValue}) =>{
        try{
            const {data} = await carService.getAll();
            return data;
        }
        catch(e){
            return rejectWithValue(e.response.response);
        }
    }
)
const add = createAsyncThunk(
    'carSlice/add',
    async ({obj},{rejectWithValue})=>{
        try{
            const {data} = await carService.save(obj);
            return data;
        }catch (e){
            return rejectWithValue(e.response.data);
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/delete',
    async ({id},{rejectWithValue} )=>{
        try{
            const {data} = await carService.delete(id);
            return data;
        }catch (e){
            rejectWithValue(e.response.data);
        }
    }
)

const update = createAsyncThunk(
    'carSlice/update',
    async ({id,obj})=>{
        const {data} = await carService.update(id,obj);
        return data;
    }
)



const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers:{
        setCar: (state,action)=>{
            state.updateCar = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                state.errors = null;
                state.cars = action.payload;
            })

            .addCase(add.fulfilled,(state,action)=>{
                state.cars.push(action.payload);
            })

            .addCase(deleteById.fulfilled,(state,action)=>{
               const index = state.cars.findIndex(item=>item.id === action.payload.id);
               if(index === 1){
                   state.cars.splice(index,1);
               }
            })
            .addCase(update.fulfilled,(state, action)=>{
                const find = state.cars.find(item=>item.id ===action.payload.id);
                Object.assign(find,action.payload);
                state.updateCar = null;
            })


            .addDefaultCase((state,action)=>{
                const [type]=action.type.split('/').splice(-1)
                if(type === 'rejected'){
                    state.errors = action.payload;
                }else{
                    state.errors = null;
                }
            })
    }

});

const {reducer:carReducer,actions:{setCar}} = carSlice;

const carActions = {
    getAll,
    add,
    deleteById,
    update,
    setCar
};

export {
    carActions,
    carReducer
};