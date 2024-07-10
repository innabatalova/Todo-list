import { FC, ReactElement, useState, useEffect } from 'react'
import { Button } from '@mui/material'

import styles from './SortingFilters.module.scss'
import { SortingFiltersButtonStyle } from './SortingFilters-mui.styles'

interface TodoItem {
  id: number,
  content: string,
  status: string
}

interface IProps {
  todos: TodoItem[] | null,
  getTodos: (sortArrTodos: TodoItem[]) => void
}

const SortingFilters: FC<IProps> = ({ todos, getTodos }): ReactElement => {
  const [stateActive, setStateActive] = useState<string>('')
  const [stateTodos, setStateTodos] = useState<TodoItem[] | null>(todos)

  useEffect(() => {
    if (stateTodos != null) {
      getTodos(stateTodos)
    }
  }, [stateTodos])

  const sortingTodos = () => {
    setStateActive('sorting')
    if (todos != null) {
      const successTodosArray = todos.sort((itemOne: TodoItem, itemTwo: TodoItem) => itemOne.content > itemTwo.content ? 1 : -1)
      setStateTodos(successTodosArray)
    }
  }

  const sortingReverseTodos = () => {
    setStateActive('sortingReverse')
    if (todos != null) {
      const successTodosArray = todos.sort((itemOne: TodoItem, itemTwo: TodoItem) => itemOne.content < itemTwo.content ? 1 : -1)
      setStateTodos(successTodosArray)
    }
  }

  return (
    <div className={styles.SortingFilters}>
      <Button variant='contained' className={stateActive === 'sorting' ? 'active' : ''} onClick={sortingTodos} sx={SortingFiltersButtonStyle}>Sorting A - Z</Button>
      <Button variant='contained' className={stateActive === 'sortingReverse' ? 'active' : ''} onClick={sortingReverseTodos} sx={SortingFiltersButtonStyle}>Sorting Z - A</Button>
    </div>
  )
}

export default SortingFilters