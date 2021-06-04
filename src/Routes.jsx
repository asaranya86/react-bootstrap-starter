import { Switch, Route, Redirect } from 'react-router-dom';
import { useAuth } from './auth';
//Redirect
import { Login, Home } from './pages';
import { RouteWithLayouts, MainLayout, MinLayout } from './layouts';

/* This is a Switch Case,  so it will route to the first path that matches the URL
    So if you put "/" at the top level, everything will route to Home
    alternaively you can add exact prop
*/
export default function Routes() {
  return (
    <Switch>
      <Route path='/login'>
        <RouteWithLayouts layout={MinLayout} component={Login} />
      </Route>
      <PrivateRoute path='/'>
        <RouteWithLayouts layout={MainLayout} component={Home} />
      </PrivateRoute>
    </Switch>
  );
}

function PrivateRoute({ children, ...rest }) {
  let { user } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
