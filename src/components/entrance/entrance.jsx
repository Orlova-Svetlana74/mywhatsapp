import { useAccountUserMutation } from '../../redux/authApi';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Entrance() {
  const [credentials, setCredentials] = useState({
    IdInstance: '',
    apiTokenInstance: '',
  });
  const instance = useRef(null);
  const tokenInstance = useRef(null);
  const [AccountUser] = useAccountUserMutation();
  const navigate = useNavigate();

  const sendIdinstance = (event) => {
    event.preventDefault();
    const IdInstance = instance.curent.value;
    const apiTokenInstance = tokenInstance.current.value;
    if (IdInstance.lenght > 0 && apiTokenInstance.lenght > 0) {
      AccountUser({
        IdInstance: IdInstance,
        apiTokenInstance: apiTokenInstance,
      }).then((data) => {
        console.log(data);
        if (data.data.stateInstance === 'authorized') {
          localStorage.setItem('idInstance', IdInstance);
          localStorage.setItem('apiTokenInstance', apiTokenInstance);
          navigate('/');
        }
      });
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <input
        type="text"
        placeholder="введите idInstance"
        value={credentials.idInstance}
        onChange={(e) =>
          setCredentials({ ...credentials, idInstance: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="введите apiTokenInstance"
        value={credentials.apiTokenInstance}
        onChange={(e) =>
          setCredentials({ ...credentials, apiTokenInstance: e.target.value })
        }
      />
      <button onClick={sendIdinstance}>Войти</button>
      {/* <h2>Выход</h2>
      <button onClick={handleLogout} disabled={isLoggingOut}>
        {isLoggingOut ? 'Выход...' : 'Выйти'}
      </button> */}{' '}
      *
    </div>
  );
}
export default Entrance;
