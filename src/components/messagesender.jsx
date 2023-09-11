import React, { useState } from 'react';
import { useSendMessageMutation } from '../redux/whatsApi';

function MessageSender() {
  const [message, setMessage] = useState('');
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const handleSendMessage = async () => {
    if (message) {
      await sendMessage({ message }); // Отправка запроса на отправку сообщения
      setMessage('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage} disabled={isLoading}>
        {isLoading ? 'Отправка...' : 'Отправить сообщение'}
      </button>
    </div>
  );
}

export default MessageSender;