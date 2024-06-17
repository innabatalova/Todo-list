import { FC, ReactElement, useState } from 'react'
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
      </li>
      <Delete color="error" sx={TodoStyle} onClick={deletedTodo} />
    </div>
  )
}

export default Todo