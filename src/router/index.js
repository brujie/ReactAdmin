import React from 'react'
import {BrowserRouter,HashRouter,Redirect,Route,Switch} from 'react-router-dom'
import Login from '../pages/login/index.jsx'
import BaseLayout from '../pages/layout/index.jsx'
export default function RouterIndex() {
  return (
    <HashRouter>
    <Switch>
      <Route path="/login" component={Login}></Route>
      <Route path="/" component={BaseLayout}></Route>
      {/* <Route path="/layout"
        render={()=>{
        localStorage.getItem('token') ? <Layout/>:<Redirect to="/login"/>
      }}/> */}
    </Switch>
  </HashRouter>
  )
}
