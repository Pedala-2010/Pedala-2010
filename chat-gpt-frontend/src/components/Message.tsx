import React from 'react';

interface MessageProps {
    content: string;
    sender: string;
}

const Message: React.FC<MessageProps> = ({ content, sender }) => {
    return (
        <div className="message">
            <span className="message-sender">{sender}:</span>
            <span className="message-content">{content}</span>
        </div>
    );
};

export default Message;