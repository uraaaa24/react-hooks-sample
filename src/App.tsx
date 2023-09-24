import { Box, Button, Divider, List, ListItem, TextField, Typography } from '@mui/material'

import { useContext, useEffect, useReducer, useRef, useState } from 'react'
import './App.css'
import { UserInfoContext } from './main'

const reducer = (state: number, action: { type: string }) => {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}

function App() {
  const [count, setCount] = useState<number>(0)
  const userInfo = useContext(UserInfoContext)
  const ref = useRef<HTMLInputElement>()
  const [state, dispatch] = useReducer(reducer, 0)

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('hello useEffect')
  }, [count])

  const handleRef = () => {
    if (!ref.current) return
    console.log(ref.current.value)
  }

  return (
    <>
      <List>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h3">useState, useEffect</Typography>
          <Button variant="outlined" onClick={handleClick}>
            +
          </Button>
          <Typography variant="body1">{count}</Typography>
        </ListItem>
        <Divider />

        <ListItem sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h3">useContext</Typography>
          <Typography variant="body1">{userInfo.name}</Typography>
          <Typography variant="body1">{userInfo.age}</Typography>
        </ListItem>
        <Divider />

        <ListItem sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h3">useRef</Typography>
          <TextField type="text" inputRef={ref} />
          <Button variant="outlined" onClick={handleRef}>
            UseRef
          </Button>
        </ListItem>

        <ListItem sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h3">useReducer</Typography>
          <Typography variant="body1">カウント：{state}</Typography>
          <Box display="flex" sx={{ gap: 2 }}>
            <Button variant="outlined" onClick={() => dispatch({ type: 'increment' })}>
              +
            </Button>
            <Button variant="outlined" onClick={() => dispatch({ type: 'decrement' })}>
              -
            </Button>
          </Box>
        </ListItem>

        <Divider />
      </List>
    </>
  )
}

export default App
