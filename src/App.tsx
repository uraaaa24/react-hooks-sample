import { Button, Divider, List, ListItem, TextField, Typography } from '@mui/material'

import { useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import { UserInfoContext } from './main'

function App() {
  const [count, setCount] = useState<number>(0)
  const userInfo = useContext(UserInfoContext)
  const ref = useRef<HTMLInputElement>()

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
        <Divider />
      </List>
    </>
  )
}

export default App
