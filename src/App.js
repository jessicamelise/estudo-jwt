import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/home/Home';
import Login from './views/login/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
