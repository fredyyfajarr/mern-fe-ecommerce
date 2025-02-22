1. install dependencies :
$ npm install socket.io-client

2. create komponen :
// filepath: /src/components/Chat.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import customAPI from '../api';

const socket = io('http://localhost:5000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await customAPI.get('/chat/messages');
      setMessages(data);
    };

    fetchMessages();

    socket.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [message, ...prevMessages]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const { data } = await customAPI.post('/chat/message', { text });
    socket.emit('sendMessage', data);
    setText('');
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message) => (
          <div key={message._id} className="message">
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;

3. route app.jsx client chat :
// filepath: /src/App.jsx
import React from 'react';
import Chat from './components/Chat';

const App = () => {
  return (
    <div className="App">
      <Chat />
    </div>
  );
};

export default App;