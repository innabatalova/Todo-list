import { FC, ReactElement } from 'react'
import { Typography } from '@mui/material'

import Todo from '../Todo/Todo'

import styles from './TodoList.module.scss'

interface TodoItem {
  id: number,
  content: string,
  status: string
}

interface IProps {
  todos: TodoItem[] | null,
  getTodos: (item: number) => void
}

const TodoList: FC<IProps> = ({ todos, getTodos }): ReactElement => {
  if (todos === null || todos.length === 0) {
    return <div className={styles.TodoListLeer}>
      <Typography color="primary">"There are no tasks yet, add yours!"</Typography>
    </div>
  }

  const deleteTodo = (todoId: number) => {
    getTodos(todoId)
  }

  return (
    <div className={styles.TodoList}>
      <ul className={styles.List}>
        {todos.map((todo: TodoItem) => {
          return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        })}
      </ul>
    </div>
  )
}

export default TodoList