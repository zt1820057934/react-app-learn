import { NavLink, Redirect } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import ReduxDemo from './pages/reduxDemo/ReduxDemo'

function App() {
  return (
    <>
      <NavLink to='/redux'>Redux示例</NavLink>
      <Redirect to = '/' />

      <Switch>
        <Route path='/redux' component={ReduxDemo} />
      </Switch>
    </>
  );
}

export default App;
