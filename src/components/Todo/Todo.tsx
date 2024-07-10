import { FC, ReactElement, useState, useEffect } from 'react'
import { LibraryAddCheck, CheckBoxOutlineBlank, Delete } from '@mui/icons-material'

import styles from './Todo.module.scss'
import { TodoStyle } from './Todo-mui.styles'

interface TodoItem {
  id: number,
  content: string,
  status: string
}

interface IProps {
  todo: TodoItem,
  deleteTodo: (todoId: number) => void
}

const Todo: FC<IProps> = ({ todo, deleteTodo }): ReactElement => {
  const [statusTodo, setStatusTodo] = useState(todo.status)

  useEffect(() => {
    todo.status = statusTodo
  }, [statusTodo])

  const toogleStatusTodo = () => {
    statusTodo === 'success' ? setStatusTodo('pending') : setStatusTodo('success')
  }

  const deletedTodo = () => {
    deleteTodo(todo.id)
  }

  return (
    <div className={styles.Todo}>
      <li className={styles.Item} onClick={toogleStatusTodo}>
        {statusTodo === 'success' ? <LibraryAddCheck color="primary" /> : <CheckBoxOutlineBlank color="primary" />}
        <span className={styles.Content + ' ' + (statusTodo === 'success' ? styles.Content_success : styles.Content_pending)}>{todo.content}</span>
        <Delete color="error" sx={TodoStyle} onClick={deletedTodo} />
      </li>
    </div>
  )
}

export default Todo