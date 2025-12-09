
import { useCollection } from '../hooks/useCollection'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'


function Todos() {
  const {data:todos}=useCollection("mytodos")
  return (
    <div className='flex justify-between px-6 lg:flex-row text-amber-900  bg-amber-800/10 pt-10 h-screen sm:flex-col-reverse '>
   <div className='flex flex-col gap-2  '> 
     {todos &&  <TodoList todos={todos} />}
   </div>
   <div>
     <h1 className='font-bold text-2xl font3d cursor-pointer'>New todo:</h1>
     <TodoForm/>
   </div>
     </div>
  )
}

export default Todos
