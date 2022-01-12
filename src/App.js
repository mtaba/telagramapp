import { Route, Switch } from 'react-router';
import ChatListPage from './pages/chatListPage/chatListPage.component.jsx'
import ChatPage from './pages/chatPage/chatpage.component'
import './App.css';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={ChatListPage} />
        <Route exact path="/chat" component={ChatPage} />
    </Switch>
  );
}

export default App;
