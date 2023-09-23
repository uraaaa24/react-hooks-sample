import { Button, Divider, List, ListItem, Typography } from "@mui/material"

import { useState } from "react"
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <List>
        <ListItem sx={{display: "flex", flexDirection: "column", gap: 2}}>
          <Typography variant="h2">useState</Typography>
          <Button variant="outlined" onClick={handleClick}>+</Button>
          <Typography variant="body1">{count}</Typography>
        </ListItem>
        <Divider />

      </List>
    </>
  )
}

export default App
