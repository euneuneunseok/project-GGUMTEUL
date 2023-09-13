import { createSlice } from "@reduxjs/toolkit";

export interface themeModeType{
  textColor: string;
  backgroundImageUrl : string;
}

export interface initialStateType{
  themeMode: themeModeType
}

const initialState :initialStateType={
  themeMode: { 
    textColor: "#FFFFFF",
    backgroundImageUrl : `${process.env.PUBLIC_URL}/image/background-image/sunset-background.jpg`
  } as themeModeType,
}

export const themeModeReducer = createSlice({
  name: 'themeModeReducer',
  initialState,
  reducers:{
    changeMode: (state, action) => {
      state.themeMode =  action.payload;
      console.log(state.themeMode,'여기 저장되었어!')
    },
  },
});

export const { changeMode } = themeModeReducer.actions;

export default themeModeReducer;