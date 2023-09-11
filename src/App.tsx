import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes/index'


const App: React.FC = () => {
  // 获得路由
  const children = useRoutes(routes)
  return (<div>{children}</div>)
}

export default App