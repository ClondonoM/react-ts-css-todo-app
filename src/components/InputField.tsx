import { useRef } from 'react';
import styles from '../styles/InputField.module.css';

interface Props { 
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e:React.FormEvent) => void;
}

const InputField = ({todo, setTodo,handleAdd}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className={styles.input} onSubmit={(e) => {handleAdd(e); inputRef.current?.blur();}
}>
      <input
        ref = {inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task" className={styles.input__box} />
      <button type="submit" className={styles.input__submit}>Go</button>
    </form>
  )
}

export default InputField