import { Button, Divider, List, ListItem, Typography } from "@mui/material"

import { useContext, useEffect, useState } from "react"
import './App.css'
import { UserInfoContext } from "./main"

function App() {
  const [count, setCount] = useState<number>(0)
  const userInfo = useContext(UserInfoContext)

  const handleClick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log("hello useEffect")
  }, [count])

  return (
    <>
      <List>
        <ListItem sx={{display: "flex", flexDirection: "column", gap: 2}}>
          <Typography variant="h3">useState, useEffect</Typography>
          <Button variant="outlined" onClick={handleClick}>+</Button>
          <Typography variant="body1">{count}</Typography>
        </ListItem>
        <Divider />

        <ListItem sx={{display: "flex", flexDirection: "column", gap: 2}}>
          <Typography variant="h3">useContext</Typography>
          <Typography variant="body1">{userInfo.name}</Typography>
          <Typography variant="body1">{userInfo.age}</Typography>
        </ListItem>
        <Divider />

      </List>      
    </>
  )
}

export default App
