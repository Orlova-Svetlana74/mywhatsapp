import { useLazyAccountUserQuery } from '../../redux/authApi';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSessionData } from '../../utils/utils';

function Entrance() {
  // const [credentials, setCredentials] = useState({
  //   IdInstance: '',
  //   apiTokenInstance: '',
  // });
  const instanceRef = useRef(null);
  const tokenInstanceRef = useRef(null);

  const [AccountUser, { isLoading }] = useLazyAccountUserQuery({
    // pollingInterval: 3000,
  });
  const navigate = useNavigate();

  const handleEntrance = async () => {
    const idInstance = instanceRef.current.value;
    const apiTokenInstance = tokenInstanceRef.current.value;
    console.log(idInstance);
    console.log(apiTokenInstance);

    if (idInstance && apiTokenInstance) {
      await AccountUser({
        idInstance,
        apiTokenInstance,
      }).then((data) => {
        console.log(data);

        if (data.data.stateInstance === 'authorized') {
          console.log('работает');
          // sessionStorage.setItem('idInstance', idInstance);
          // sessionStorage.setItem('apiTokenInstance', apiTokenInstance);
          setSessionData({ idInstance, apiTokenInstance });
          navigate('/entrance');
        }
      });
    }
  };
  return (
    <div>
      <h2>Вход</h2>
      <input type="text" placeholder="введите idInstance" ref={instanceRef} />
      <input
        type="password"
        placeholder="введите apiTokenInstance"
        ref={tokenInstanceRef}
      />
      <button onClick={handleEntrance} disabled={isLoading}>
        {isLoading ? 'Вход...' : 'Войти'}
      </button>
    </div>
  );
}
export default Entrance;
