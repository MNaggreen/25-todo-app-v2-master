/* npm install uuid пакет для генерации уникальных
 идентификаторов и ниже импортируем*/

import { useState } from 'react'
/* сначала глобальные импорты */

import { v4 as uuidv4 } from 'uuid'

/* потом локальные импорты */
/* import TodoList from './components/TodoList/TodoList.js' 
такой путь очень длинный */
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import './App.css'

/* рекомендуется создавать приложение сначала без стилей
апотом уже стилизовать и позиционировать размечать
 */
function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
      /* генерируем случайный идентификатор 
      из нашего нового пакета
      порядок свойств в обекте може быть любой */
    }
    setTodos([...todos, newTodo])
  }
  /*   создаем функцию которая будет добавлять обьект
  newTodo в список в данной функции мы берем массив 
  деструктуризируем его для
удобства и доавляем туда наш текст */

  const deleteTodoHandler = (id) => {
    /* функция которая по двойному клику на задачу
    удаляет её */
    setTodos(todos.filter((todo) => todo.id !== id))
    /* параметр функции фильтр это id
    элемента если значение (todo.id равно id) правдиво фильтр все оставляет
    если нет то элемент будет удален*/
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : /* разделяем обьект на свойства и перезаписываем его
        свойсто использую spread оператор
        меняем значение на противоположнок с помоью не 
        !todo.isCompleted */

            { ...todo }
        /* иначе создаем новый обьект */
      })
    )
  }
  /* функция которая делает принажатии 
  на галочку задачу выполненой */

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {/* 1 действие передаем функцию как свойство в файл
      todoform  */}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {/* 1 действие передаем наш список как переменную в файл TodoList.js */}
      {/* передаем нашу функцию которая удаляет элемент из массива */}
    </div>
  )
}

export default App
/* react-icons ri это раздел на сайте remix icons 
оттуда мы будем брать наши иконки*/

/* пишем npm install react-icons */
