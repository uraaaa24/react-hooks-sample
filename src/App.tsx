import { Box, Button, Divider, List, ListItem, TextField, Typography } from '@mui/material'

import { useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import './App.css'
import SomeChild from './components/SomeChild'
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

  // useMemo
  const [count01, setCount01] = useState<number>(0)
  const [count02, setCount02] = useState<number>(0)
  // const square = () => {
  //   let i = 0
  //   while (i < 2000000000) {
  //     i++
  //   }
  //   return count02 * count02
  // }
  const square = useMemo(() => {
    let i = 0
    while (i < 2000000000) {
      i++
    }
    console.log('クリックされました')
    return count02 * count02
  }, [count02])

  // useCallback 関数のメモ化（useMemoの関数バージョン）
  const [counter, setCounter] = useState<number>(0)
  // const showCount = () => {
  //   alert('これは重い処理です')
  // }
  const showCount = useCallback(() => {
    setCounter(counter + 1)
    alert('これは重い処理です: ' + counter)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

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

        <ListItem sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h3">useMemo</Typography>
          <Box display="flex" sx={{ gap: 2, alignItems: 'center' }}>
            <Typography variant="body1">カウント１：{count01}</Typography>
            <Button variant="outlined" onClick={() => setCount01(count01 + 1)}>
              +
            </Button>
          </Box>
          <Box display="flex" sx={{ gap: 2, alignItems: 'center' }}>
            <Typography variant="body1">カウント２：{count02}</Typography>
            <Button variant="outlined" onClick={() => setCount02(count02 + 1)}>
              +
            </Button>
          </Box>
          <Typography variant="body1">結果：{square}</Typography>
        </ListItem>
        <Divider />

        <ListItem sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h3">useCallback</Typography>
          <SomeChild showCount={showCount} />
        </ListItem>
        <Divider />
      </List>
    </>
  )
}

export default App
