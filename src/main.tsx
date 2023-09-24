import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

type UserInfoType = {
  name: string,
  age: number
}

const userInfo = {
  name: "山田太郎",
  age: 25
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserInfoContext = createContext<UserInfoType>(userInfo)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserInfoContext.Provider value={userInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserInfoContext.Provider>
)
