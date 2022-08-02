import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    errors: null,//state.errors
    cars: [],//state.cars
    updateCar: null,//state.updateCar// it is marker to check if we update item or set it.
    next: null,
    prev: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWithValue}) =>{
        try{
            const {data} = await carService.getAll();
            return data;// it is action.payload if action was fullfilled
        }
        catch(e){
            return rejectWithValue(e.response.response);// it is action.payload if action was rejected
        }
    }
)
const add = createAsyncThunk(
    'carSlice/add',
    async ({obj},{rejectWithValue})=>{
        try{
            const {data} = await carService.save(obj);// sends obj from carForm to API and returns it into action.payload if it was fulfilled
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
            const {data} = await carService.delete(id);//removes selected obj from API and gives you all information about chosen object, so, you can remove it from state.cars
            return data;
        }catch (e){
            rejectWithValue(e.response.data);
        }
    }
)

const update = createAsyncThunk(
    'carSlice/update',
    async ({id,obj})=>{
        const {data} = await carService.update(id,obj);//replacing item with new item from carForm.
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
                state.next = action.payload.next;
                state.prev = action.payload.prev;
            })

            .addCase(add.fulfilled,(state,action)=>{
                state.cars.push(action.payload);// adds item to our array
            })

            .addCase(deleteById.fulfilled,(state,action)=>{
               const index = state.cars.findIndex(item=>item.id === action.payload.id);//find the same index, if index was found, it returns 1;
               if(index === 1){//if index are equal to 1, you remove it/ one element from array
                   state.cars.splice(index,1);
               }
            })
            .addCase(update.fulfilled,(state, action)=>{
                const find = state.cars.find(item=>item.id ===action.payload.id);//searching for item with the same id
                Object.assign(find,action.payload);//switching found item with new edited item which we retrieve from carForm
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