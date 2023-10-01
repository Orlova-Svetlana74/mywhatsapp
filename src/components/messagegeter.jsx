import React, { useState } from 'react';
import { useLazyGetMessageQuery } from '../redux/whatsApi';
import { clearSessionData } from '../utils/utils';
import { useNavigate } from 'react-router-dom';

function MessageGeter() {
  const [message, setMessage] = useState('');
  const [getMessage, { isLoading }] = useLazyGetMessageQuery({
    pollingInterval: 3000,
  });
  const navigate = useNavigate();

  const exit = () => {
    clearSessionData();
    navigate('/entrance');
  };

  const handleGetMessage = async () => {
    if (message) {
      await getMessage(); // Отправка запроса на получение сообщения
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

      <button onClick={exit}>Выход</button>
    </div>
  );
}

export default MessageGeter;