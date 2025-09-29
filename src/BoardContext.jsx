/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react'
import { boardReducer, initalBoard } from './BoardReducer';

export const BoardContext=createContext();

export function useBoard() {
    return useContext(BoardContext);
}

export function BoardProvider({ children }) {
    const [state, dispatch]=useReducer(boardReducer,initalBoard)
    return(
        <BoardContext.Provider value={{state,dispatch}}>
            {children}
        </BoardContext.Provider>
    );
}