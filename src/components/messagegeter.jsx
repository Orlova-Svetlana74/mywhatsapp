import React, { useState } from 'react';
import { useGetMessageMutation } from '../redux/whatsApi';

function MessageGeter() {
  const [message, setMessage] = useState('');
  const [getMessage, { isLoading }] = useGetMessageMutation();

  const handleGetMessage = async () => {
    if (message) {
      await getMessage({ message }); // Отправка запроса на получение сообщения
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
      <button onClick={handleGetMessage} disabled={isLoading}>
        {isLoading ? 'Получение...' : 'Получить сообщение'}
      </button>
    </div>
  );
}

export default MessageGeter;