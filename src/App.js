import { Route, Switch } from 'react-router';
import ChatListPage from './pages/chatListPage/chatListPage.component.jsx';
import ChatPage from './pages/chatPage/chatpage.component';
import ContactPage from './pages/contactPage/contactPage.component';
import ContactInfo from './pages/contactInfo/contactInfo.component'
import './App.css';

function App() {
  return (
    <Switch>
        <Route exact path="/" component={ChatListPage} />
        <Route exact path="/chat" component={ChatPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/contactinfo" component={ContactInfo} />
    </Switch>
  );
}

export default App;
