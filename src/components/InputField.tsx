import styles from '../styles/InputField.module.css';

const InputField = () => {
  return (
    <form className={styles.input}>
      <input type="input" placeholder="Enter a task" className={styles.input__box} />
      <button type="submit" className={styles.input__submit}>Go</button>
    </form>
  )
}

export default InputField