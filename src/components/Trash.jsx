import React from 'react'
import { useBoard } from '../BoardContext'

export default function Trash(){
    const {dispatch} = useBoard();
    const handleDragOver=(e)=>{
        e.preventDefault();
    }
    const handleDrop=(e)=>{
        e.preventDefault();
        const task=e.dataTransfer.getData('task');
        const sourceCol=e.dataTransfer.getData('sourceCol');
        if(task && sourceCol){
            dispatch({type:'DELETE_TASK', payload:{sourceCol,task}});
        }
    }
    return(
        <div className='trash' onDrop={handleDrop} onDragOver={handleDragOver}>
            <p>Trash</p>
        </div>
    )
}