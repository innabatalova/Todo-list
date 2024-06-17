import { ChangeEvent, FC, ReactElement, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TextField, Button } from '@mui/material'

import styles from './AddTodo.module.scss'
import { AddTodoStyle, AddTodoButtonStyle } from './AddTodo-mui.styles'

interface TodoItem {
  id: number,
  content: string,
  status: string
}

interface IProps {
  getTodos: (item: TodoItem) => void
}

const AddTodo: FC<IProps> = ({ getTodos }): ReactElement => {
  const [valueInput, setValueInput] = useState('')
  const id = uuidv4()

  const changeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setValueInput(e.target.value)
  }

  const addedTodo = () => {
    if (valueInput.trim() !== '') {
      let newTodo = {
        id: id,
        content: valueInput,
        status: 'pending'
      }
      getTodos(newTodo)
      setValueInput('')
    }
  }

  return (
    <div className={styles.AddTodo}>
      <TextField variant="outlined" sx={AddTodoStyle} onChange={changeValueInput} value={valueInput} />
      <Button variant="contained" sx={AddTodoButtonStyle} onClick={addedTodo}>
        Add Todo
      </Button>
    </div >
  );
}

export default AddTodo