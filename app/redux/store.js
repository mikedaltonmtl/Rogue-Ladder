import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/gameSlice';

// import puzzleGenReducer from './features/puzzleGenSlice';
// import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    gameReducer,
    // puzzleGenReducer
  }
});

