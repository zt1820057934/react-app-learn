import { NavLink, Redirect } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Main as Main01 } from './pages/reduxDemo1/Main'
import { Main as Main02 } from './pages/reduxDemo2/Main'
import { Main as Main03 } from './pages/reduxDemo3/Main'

function App() {
  return (
    <>
      <NavLink to='/redux01'>Redux示例一</NavLink>
      <br/>
      <NavLink to='/redux02'>Redux示例二(异步action)</NavLink>
      <br/>
      <NavLink to='/redux03'>Redux示例三(初步使用官方react-redux)</NavLink>
      <br/>
      <Redirect to = '/' />

      <Switch>
        <Route path='/redux01' component={Main01} />
        <Route path='/redux02' component={Main02} />
        <Route path='/redux03' component={Main03} />
      </Switch>
    </>
  );
}

export default App;
