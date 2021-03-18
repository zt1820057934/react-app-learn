import React, { lazy, Suspense } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import { Main as Main01 } from './pages/reduxDemo1/Main'
import { Main as Main02 } from './pages/reduxDemo2/Main'
import { Main as Main03 } from './pages/reduxDemo3/Main'
import { Main as Main04 } from './pages/reduxDemo4/Main'
import { Main as Main05 } from './pages/reduxDemo5/Main'
import Ui from './pages/ui/Ui'

/*
const Main01 = lazy(() => import('./pages/reduxDemo1/Main'))
const Main02 = lazy(() => import('./pages/reduxDemo2/Main'))
const Main03 = lazy(() => import('./pages/reduxDemo3/Main'))
const Main04 = lazy(() => import('./pages/reduxDemo4/Main'))
const Main05 = lazy(() => import('./pages/reduxDemo5/Main'))
*/

function App() {
  return (
    <>
      <h1>组件</h1>
      <Ui/>
      <hr/>
      <h1>路由</h1>

      <NavLink to='/redux01'>Redux示例一</NavLink>
      <br/>
      <NavLink to='/redux02'>Redux示例二(异步action)</NavLink>
      <br/>
      <NavLink to='/redux03'>Redux示例三(初步使用官方react-redux)</NavLink>
      <br/>
      <NavLink to='/redux04'>Redux示例四(react-redux - 整合UI组件与container组件)</NavLink>
      <br/>
      <NavLink to='/redux05'>Redux示例五(react-redux - 多组件间状态共享)</NavLink>
      <br/>
      <Redirect to = '/' />

      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route path='/redux01' component={Main01} />
          <Route path='/redux02' component={Main02} />
          <Route path='/redux03' component={Main03} />
          <Route path='/redux04' component={Main04} />
          <Route path='/redux05' component={Main05} />
        </Suspense>
      </Switch>
    </>
  );
}

export default App;
