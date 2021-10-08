import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="223b04a6-cd55-41e1-b0d7-aea99a4057b2"
      userName="zeeshan"
      userSecret="gugly123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
