import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import styles from '../styles/SingleTodo.module.css'


type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}:Props) => {
  
  const handleDone = (id:number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
          
  }
  
  const styleDone: string = todo.isDone ? 
      (`${styles.todos_sigle_text_done}`)
     :
    (`${styles.todos_sigle_text}`)
  
  
  return (
    <form className={`${styles.todos_single} ${styleDone} 
     
    `}
      >{todo.todo}
      <div>
        <span className={styles.icon}>
          <AiFillEdit/>
        </span>
        <span className={styles.icon}>
          <AiFillDelete/>
        </span>
        <span className={styles.icon} onClick={()=>handleDone(todo.id)}>
          <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo