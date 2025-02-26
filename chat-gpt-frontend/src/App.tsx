import React from 'react';
import ChatBox from './components/ChatBox';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <h1>Chat Application</h1>
            <ChatBox />
        </div>
    );
};

export default App;