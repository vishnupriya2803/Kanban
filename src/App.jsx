import './App.css'
import { BoardProvider } from './BoardContext'
import Board from './components/Board'

function App() {
  

  return (
      <BoardProvider>
      <Board/>
    </BoardProvider>
  )
}

export default App
