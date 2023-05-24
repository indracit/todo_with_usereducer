import { useState } from "react"
import './index.css'

const App = () => {

  const [todo,setTodo] = useState<string>('');
  const [todos , setTodos] = useState<string []>([])
  const handleSubmit=(e:React.FormEvent<HTMLInputElement>)=>{
    e.preventDefault()
    setTodos([...todos,todo])
    setTodo('');
    
  }
  const handleDelete=(index:number)=>{
    setTodos([...todos.slice(0,index),...todos.slice(index+1,todos.length)])
  }
  return (
    <main onSubmit={handleSubmit} className="main-container">
      <form >
        <input type="text" 
        placeholder="Remind me"
        onChange={(e)=>setTodo(e.target.value)}
        value={todo}
        required
        />
        <button type="submit">Add</button>
      </form>
    
      {todos.map((d,index)=>  <article className="todos"><p className="todo" key ={index}> {d}
      <button onClick={()=>handleDelete(index)}>Delete</button></p> 
      </article>)}
    </main>
  )
}

export default App