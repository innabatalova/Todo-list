import { FC, ReactElement, useState, useEffect } from 'react'
import { Button } from '@mui/material'

import styles from './VisibilityFilters.module.scss'
import { VisibilityFiltersButtonStyle } from './VisibilityFilters-mui.styles'

interface TodoItem {
  id: number,
  content: string,
  status: string
}

interface IProps {
  todos: TodoItem[] | null,
  getTodos: (sortArrTodos: TodoItem[]) => void
}

const VisibilityFilters: FC<IProps> = ({ todos, getTodos }): ReactElement => {
  const [stateActive, setStateActive] = useState<string>('all')
  const [stateTodos, setStateTodos] = useState<TodoItem[] | null>(todos)

  useEffect(() => {
    if (stateTodos != null) { getTodos(stateTodos) }
  }, [stateTodos])

  const allTodos = () => {
    setStateActive('all')
    setStateTodos(todos)
  }

  const pendingTodos = () => {
    setStateActive('pending')
    if (todos != null) {
      const successTodosArray = todos.filter((item: TodoItem) => item.status === 'pending')
      setStateTodos(successTodosArray)
    }
  }

  const successTodos = () => {
    setStateActive('success')
    if (todos != null) {
      const successTodosArray = todos.filter((item: TodoItem) => item.status === 'success')
      setStateTodos(successTodosArray)
    }
  }

  return (
    <div className={styles.VisibilityFilters}>
      <Button variant='contained' className={stateActive === 'all' ? 'active' : ''} onClick={allTodos} sx={VisibilityFiltersButtonStyle}>All todos</Button>
      <Button variant='contained' className={stateActive === 'pending' ? 'active' : ''} onClick={pendingTodos} sx={VisibilityFiltersButtonStyle}>Pending todos</Button>
      <Button variant='contained' className={stateActive === 'success' ? 'active' : ''} onClick={successTodos} sx={VisibilityFiltersButtonStyle}>Success todos</Button>
    </div>
  )
}

export default VisibilityFilters