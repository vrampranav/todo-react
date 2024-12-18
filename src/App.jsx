import {Header} from './components/Header'
import {Tabs} from './components/Tabs'
import {TodoList} from './components/TodoList'
import {TodoInput} from './components/TodoInput'

function App() {
  return (
    <>
      <div>
        <Header/>
        <Tabs/>
        <TodoList/>
        <TodoInput/>
      </div>
    </>
  )
}

export default App
