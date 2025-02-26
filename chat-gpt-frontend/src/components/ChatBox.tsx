import React, { useState } from 'react';
import Message from './Message';
import TransitionWrapper from './TransitionWrapper';

const ChatBox: React.FC = () => {
    const [messages, setMessages] = useState<{ id: number; content: string; sender: string }[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            const newMessage = {
                id: messages.length + 1,
                content: inputValue,
                sender: 'User',
            };
            setMessages([...messages, newMessage]);
            setInputValue('');
        }
    };

    return (
        <div className="chat-box">
            <div className="message-list">
                {messages.map((message) => (
                    <TransitionWrapper key={message.id}>
                        <Message content={message.content} sender={message.sender} />
                    </TransitionWrapper>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatBox;