import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import styles from '../styles/SingleTodo.module.css'

type Props = {
  todo: Todo,
  todos: Todo[],
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}



const SingleTodo = ({todo, todos, setTodos}:Props) => {
  return (
    <form className={styles.todos_single}>
      <span className={styles.todos_sigle_text}>{todo.todo}</span>
      <div>
        <span className={styles.icon}>
          <AiFillEdit/>
        </span>
        <span className={styles.icon}>
          <AiFillDelete/>
        </span>
        <span className={styles.icon}>
          <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo