import { NavLink, Redirect } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Main as Main01 } from './pages/reduxDemo1/Main'
import { Main as Main02 } from './pages/reduxDemo2/Main'
import { Main as Main03 } from './pages/reduxDemo3/Main'
import { Main as Main04 } from './pages/reduxDemo4/Main'
import { Main as Main05 } from './pages/reduxDemo5/Main'

function App() {
  return (
    <>
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
        <Route path='/redux01' component={Main01} />
        <Route path='/redux02' component={Main02} />
        <Route path='/redux03' component={Main03} />
        <Route path='/redux04' component={Main04} />
        <Route path='/redux05' component={Main05} />
      </Switch>
    </>
  );
}

export default App;
