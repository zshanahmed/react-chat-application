import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import ChatSettingsTop from "./components/ChatSettingsTop";

import "./App.css";

const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine
      height="100vh"
      projectID="223b04a6-cd55-41e1-b0d7-aea99a4057b2"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderChatSettingsTop={(creds, chats) => <ChatSettingsTop chats={chats} />}
    />
  );
};

export default App;
