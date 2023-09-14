import { useAccountUserMutation } from '../../redux/authApi';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Entrance() {
  // const [credentials, setCredentials] = useState({
  //   IdInstance: '',
  //   apiTokenInstance: '',
  // });
  const instanceRef = useRef(null);
  const tokenInstanceRef = useRef(null);
  const AccountUser = useAccountUserMutation();
  const navigate = useNavigate();
console.log (instanceRef)
  const handleEntrance  = async () => {
    
    const IdInstance = instanceRef.curent.value;
    const apiTokenInstance = tokenInstanceRef.current.value;

    if (IdInstance && apiTokenInstance) {
      await AccountUser
        ({IdInstance, apiTokenInstance})
        navigate ('/message')
      };    
  
}
  return (
    <div>
      <h2>Вход</h2>
      <input
        type="text"
        placeholder="введите idInstance"
        ref={instanceRef}        
      />
      <input
        type="password"
        placeholder="введите apiTokenInstance"
        ref={tokenInstanceRef}        
      />
       <button onClick={handleEntrance}>Войти</button>
    </div>
  );
}
export default Entrance;
