import React, { useContext, useState } from 'react'
import Column from './Column';
import {BoardContext, useBoard} from '../BoardContext';
import Trash from './Trash';

function TaskInput(){
  const {dispatch} = useContext(BoardContext);
  const [text, setText]= useState("");

  const handleAddTask = (e)=>{
    e.preventDefault();
    if(!text.trim()) return;
    dispatch({type: 'ADD_TASK',payload:{text}});
    setText('')
  }
  return(
    <div><center>
      <h1>Kanban Board</h1>
      <form className='form' onSubmit={handleAddTask}>
        <input className='input' type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Add new Task!'/>
        <button type='submit' className='button'>Add</button>
      </form>
    </center></div>
  )
}


export default function Board(){
  const {state} = useBoard();
  return(
    <div>
      <TaskInput/>
      <div className='board'>
      {Object.values(state.columns).map((col)=>(
        <Column key={col.id} column={col} />
      ))}
      <Trash/>
      </div>
      {/* <Trash/> */}
    </div>
  )
}