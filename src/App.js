import { Route, Switch } from 'react-router';
import ChatListPage from './pages/chatListPage/chatListPage.component.jsx'
import './App.css';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={ChatListPage} />
      </Switch>
  );
}

export default App;
