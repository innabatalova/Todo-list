export const AddTodoStyle = {
  marginRight: '1rem',
  '& input': {
    width: '20rem',
    color: '#1976d2',
    '@media(max-width: 769px)': {
      width: '100%'
    }
  },
  '@media(max-width: 769px)': {
    width: '100%',
    marginRight: '0',
    marginBottom: '1rem',
  }
}

export const AddTodoButtonStyle = {
  height: '56px',
  '@media(max-width: 769px)': {
    width: '100%'
  }
}
