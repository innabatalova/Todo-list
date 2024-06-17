import { FC, ReactElement } from 'react'

import Todo from '../Todo/Todo'

import styles from './TodoList.module.scss'

interface TodoItem {
  id: number,
  content: string,
  status: string
}

interface IProps {
  todos?: TodoItem[] | null,
  getTodos: (item: number) => void
}

const TodoList: FC<IProps> = ({ todos, getTodos }): ReactElement => {
  const deleteTodo = (todoId: number) => {
    getTodos(todoId)
  }

  return (
    <ul className={styles.TodoList}>
      {todos ? todos.map((todo: TodoItem) => {
        return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      })
        : "There are no tasks yet, add yours!"}
    </ul>
  );
}

export default TodoList