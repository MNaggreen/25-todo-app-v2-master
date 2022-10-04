import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri'
/* скачиваем npm install react-icons пакет   
потом с сайта react-icons ri выбираем
и мпортируем наш значок */
/* из внешних пакетов делаем импрот сверху */
import { FaCheck } from 'react-icons/fa'

import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, toggleTodo }) {
  /* 3 действие принимаем наш список из TodoList и выводим по одной строке */
  return (
    <div
      className={styles.todo} /* onDoubleClick={() => deleteTodo(todo.id)} */
    >
      {/* по двойному клику вызываем функциб deleteTodo и передаем
      index из map */}
      <RiTodoFill className={styles.todoIcon} />
      {/* иконка из установленного npm пакета react icons */}
      <div className={styles.todoText}>{todo.text}</div>
      {/* тут мы отображаем непросредствено текст нашего обьекта */}
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
      {/* импорт иконки выше */}
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)}/>
      {/* эта иконка font awesome и её 
      нужно импортировать из другой библиотеки*/}
    </div>
  )
}

export default Todo
