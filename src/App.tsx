import { FC, ReactElement, useState } from 'react'
import { Typography } from '@mui/material'

import AddTodo from './components/AddTodo/AddTodo'
import SortingFilters from './components/SortingFilters/SortingFilters'
import TodoList from './components/TodoList/TodoList'
import VisibilityFilters from './components/VisibilityFilters/VisibilityFilters'

import styles from './App.module.scss'
import { AppStyle } from './App-mui.styles'

interface TodoItem {
  id: number,
  content: string,
  status: string
}

const arrayTodosTest: TodoItem[] = [
  {
    id: 111,
    content: 'one todo',
    status: 'pending'
  },
  {
    id: 222,
    content: 'two todo',
    status: 'pending'
  },
  {
    id: 333,
    content: 'three todo',
    status: 'success'
  }
]

const App: FC = (): ReactElement => {
  const [arrDefaultTodos, setArrDefaultTodos] = useState<TodoItem[] | []>(arrayTodosTest)
  const [arrTodos, setArrTodos] = useState<TodoItem[] | []>(arrayTodosTest)

  const getAddedTodos = (newItem: TodoItem) => {
    setArrTodos([...arrTodos, newItem])
    setArrDefaultTodos([...arrTodos, newItem])
  }

  const getDeleteTodos = (deleteItem: number) => {
    const newTodos = arrTodos.filter((item) => item.id !== deleteItem)
    setArrTodos([...newTodos])
    setArrDefaultTodos([...newTodos])
  }

  const getFilterTodos = (filterArrTodos: TodoItem[]) => {
    setArrTodos([...filterArrTodos])
  }

  const getSortingTodos = (sortArrTodos: TodoItem[]) => {
    setArrTodos([...sortArrTodos])
  }

  return (
    <div className={styles.App}>
      <Typography variant='h2' color="primary" sx={AppStyle}>Todo List</Typography>
      <AddTodo getTodos={getAddedTodos} />
      <SortingFilters todos={arrTodos} getTodos={getSortingTodos} />
      <TodoList todos={arrTodos} getTodos={getDeleteTodos} />
      <VisibilityFilters todos={arrDefaultTodos} getTodos={getFilterTodos} />
    </div>
  )
}

export default App
